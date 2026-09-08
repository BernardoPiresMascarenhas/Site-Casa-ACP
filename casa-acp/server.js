// Entry point do Phusion Passenger no cPanel.
//
// Existe por dois motivos:
//  1. Carregar os arquivos .env antes de qualquer coisa — o Passenger não lê
//     .env.local sozinho, e sem isso RESEND_API_KEY chega undefined na rota.
//  2. Fechar o servidor de forma ordenada no SIGTERM. O Passenger manda SIGTERM
//     a cada restart/deploy; sem isso, conexões keep-alive seguram o processo
//     até o SIGKILL e sobram processos filhos pendurados.

const http = require("http");
const next = require("next");
const { loadEnvConfig } = require("@next/env");

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT, 10) || 3000;
const hostname = process.env.HOSTNAME || "0.0.0.0";

// Precisa vir antes de next() para que as variáveis já estejam em process.env.
loadEnvConfig(process.cwd(), dev);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = http.createServer((req, res) => {
      // O handler do Next devolve uma promise: sem este catch, uma rejeição
      // vira unhandledRejection e o request fica sem resposta (socket aberto).
      handle(req, res).catch((err) => {
        console.error("[server] Erro ao tratar", req.url, err);
        if (!res.headersSent) res.statusCode = 500;
        res.end("Internal Server Error");
      });
    });

    // Sem estes limites, um cliente lento (ou malicioso) mantém sockets abertos
    // indefinidamente e consome os poucos workers disponíveis no plano compartilhado.
    server.keepAliveTimeout = 65_000;
    server.headersTimeout = 66_000;
    server.requestTimeout = 30_000;

    server.listen(port, () => {
      console.log(`[server] Pronto em http://${hostname}:${port} (dev=${dev})`);
    });

    let encerrando = false;

    const encerrar = (sinal) => {
      if (encerrando) return; // Passenger pode mandar o sinal mais de uma vez.
      encerrando = true;
      console.log(`[server] ${sinal} recebido, encerrando...`);

      // Rede de segurança: se algo travar, saímos de qualquer jeito antes de o
      // Passenger perder a paciência e mandar SIGKILL.
      const forcar = setTimeout(() => {
        console.error("[server] Encerramento demorou demais, forçando saída.");
        server.closeAllConnections?.();
        process.exit(1);
      }, 10_000);
      forcar.unref();

      // Para de aceitar novos requests e espera os que estão em andamento.
      server.close(() => {
        Promise.resolve(app.close?.())
          .catch((err) => console.error("[server] Erro ao fechar o Next:", err))
          .finally(() => {
            clearTimeout(forcar);
            console.log("[server] Encerrado com sucesso.");
            process.exit(0);
          });
      });

      // Derruba já as conexões keep-alive ociosas; as ativas terminam sozinhas.
      server.closeIdleConnections?.();
    };

    process.on("SIGTERM", () => encerrar("SIGTERM"));
    process.on("SIGINT", () => encerrar("SIGINT"));
  })
  .catch((err) => {
    console.error("[server] Falha ao inicializar o Next:", err);
    process.exit(1);
  });
