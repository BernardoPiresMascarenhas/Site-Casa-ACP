"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, MapPin, Mail, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function ContatoSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "Atendimento psicológico",
    mensagem: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Ajustado o endpoint para /api/contato
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ nome: "", email: "", telefone: "", assunto: "Atendimento psicológico", mensagem: "" });
        // Retorna ao estado normal após 5 segundos
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contato" className="relative overflow-hidden bg-bege py-24 md:py-32">
      {/* Elemento decorativo sutil */}
      <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-terracota/5 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* ── Coluna Esquerda: Informações ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <p className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-terracota">
              Contato
            </p>
            <h2 className="mt-4 font-playfair text-4xl leading-tight text-marrom md:text-5xl lg:text-[3.5rem]">
              A porta <br /> está aberta
            </h2>
            
            <div className="mt-8 h-[1px] w-16 bg-terracota/40"></div>
            
            <p className="mt-8 font-lato text-base leading-[1.9] text-marrom md:text-lg">
              Ainda estamos em construção e te convidamos a ser companhia nesse
              processo. Entre em contato, acompanhe a Casa no Instagram ou
              escreva para a gente.
            </p>

            <div className="mt-12 space-y-6">
              <a 
                  href="https://instagram.com/casaacp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-4 text-marrom/80 transition-colors hover:text-terracota"
                  >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-salvia/10 text-salvia transition-colors group-hover:bg-terracota/10 group-hover:text-terracota">
                     <svg 
                        xmlns="https://www.instagram.com/casaacp/" 
                        className="h-5 w-5" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                     >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                     </svg>
                  </div>
                  <span className="font-lato text-base font-medium">@casaacp</span>
                  </a>


              <a href="mailto:contato@casaacp.com.br" className="group flex items-center gap-4 text-marrom/80 transition-colors hover:text-terracota">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-salvia/10 text-salvia transition-colors group-hover:bg-terracota/10 group-hover:text-terracota">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="font-lato text-base font-medium">contatocasaacp@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-marrom/80">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-salvia/10 text-salvia">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="font-lato text-base font-medium">Belo Horizonte, Minas Gerais</span>
              </div>

            </div>
          </motion.div>

          {/* ── Coluna Direita: Formulário ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="rounded-3xl border border-marrom/5 bg-white/60 p-8 shadow-xl backdrop-blur-md md:p-12">
              <h3 className="font-playfair text-2xl text-marrom md:text-3xl">
                Fale com a Casa
              </h3>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                
                {/* Nome */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="nome" className="font-lato text-sm font-medium text-marrom/80">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    placeholder="Seu nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="rounded-xl border border-marrom/10 bg-white/50 px-4 py-3.5 font-lato text-marrom placeholder:text-marrom/30 focus:border-terracota focus:outline-none focus:ring-1 focus:ring-terracota"
                  />
                </div>

                {/* E-mail */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="font-lato text-sm font-medium text-marrom/80">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-xl border border-marrom/10 bg-white/50 px-4 py-3.5 font-lato text-marrom placeholder:text-marrom/30 focus:border-terracota focus:outline-none focus:ring-1 focus:ring-terracota"
                  />
                </div>

                {/* Telefone */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="telefone" className="font-lato text-sm font-medium text-marrom/80">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    placeholder="(00) 00000-0000"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="rounded-xl border border-marrom/10 bg-white/50 px-4 py-3.5 font-lato text-marrom placeholder:text-marrom/30 focus:border-terracota focus:outline-none focus:ring-1 focus:ring-terracota"
                  />
                </div>

                {/* Assunto */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="assunto" className="font-lato text-sm font-medium text-marrom/80">
                    Assunto
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    className="rounded-xl border border-marrom/10 bg-white/50 px-4 py-3.5 font-lato text-marrom focus:border-terracota focus:outline-none focus:ring-1 focus:ring-terracota"
                  >
                    <option value="Atendimento psicológico">Atendimento psicológico</option>
                    <option value="Formação e cursos">Formação e cursos</option>
                    <option value="Plantão psicológico">Plantão psicológico</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="mensagem" className="font-lato text-sm font-medium text-marrom/80">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={4}
                    placeholder="Escreva sua mensagem..."
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="resize-none rounded-xl border border-marrom/10 bg-white/50 px-4 py-3.5 font-lato text-marrom placeholder:text-marrom/30 focus:border-terracota focus:outline-none focus:ring-1 focus:ring-terracota"
                  ></textarea>
                </div>

                {/* Botão de Submit e Mensagens de Status */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="flex w-full items-center justify-center rounded-xl bg-salvia px-8 py-4 font-lato text-base font-medium text-creme transition-all duration-300 hover:bg-terracota focus:outline-none focus:ring-2 focus:ring-terracota focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "idle" && "Enviar mensagem"}
                    {status === "loading" && (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    )}
                    {status === "success" && (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Mensagem enviada!
                      </>
                    )}
                    {status === "error" && (
                      <>
                        <AlertCircle className="mr-2 h-5 w-5" />
                        Erro ao enviar
                      </>
                    )}
                  </button>

                  {/* Feedback visual abaixo do botão */}
                  {status === "success" && (
                    <p className="mt-3 text-center font-lato text-sm text-salvia">
                      Agradecemos o contato. Retornaremos em breve!
                    </p>
                  )}
                  {status === "error" && (
                    <p className="mt-3 text-center font-lato text-sm text-red-500">
                      Ops! Ocorreu um erro. Tente novamente mais tarde.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}