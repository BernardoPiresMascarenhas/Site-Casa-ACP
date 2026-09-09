import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // O cPanel (hospedagem compartilhada) não suporta a otimização de imagem
    // em tempo real do Next: cada request disparava um processo de resize que
    // estourava CPU/memória do Node e derrubava o site com 503.
    // Com isto os arquivos de /public são servidos diretamente, sem processamento.
    unoptimized: true,
  },
  // Remove o header "X-Powered-By" enviado em toda resposta.
  poweredByHeader: false,

  // Redireciona links antigos indexados no Google para a Home
  async redirects() {
    return [
      {
        source: '/sobre-o-cphminas',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;