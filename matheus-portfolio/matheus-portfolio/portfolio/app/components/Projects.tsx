import Image from "next/image";

export default function Projects() {
  const clientProjects = [
    { 
      title: "QIX Skateshop", 
      type: "E-commerce", 
      techs: "Next.js, React, Node.js", 
      desc: "Desenvolvimento de template de E-commerce integrado à plataforma Magento.", 
      url: "https://qixskateshop.com.br/",
      image: "/projects/qix.png" // Nome sugerido do arquivo de imagem
    },
    { 
      title: "Chuá Brand", 
      type: "E-commerce Layout", 
      techs: "React JS, SCSS, Python", 
      desc: "Alteração de layout em e-commerce desenvolvido com Python e React JS. Utilizando também SCSS e CSS-in-JS.", 
      url: "https://www.chuabrand.com.br/",
      image: "/projects/chua.png"
    },
    { 
      title: "Natural Nuts", 
      type: "Shopify Store", 
      techs: "Liquid, Template Dev", 
      desc: "Desenvolvimento de template de E-commerce para ser integrado à plataforma Shopify.", 
      url: "https://naturalnuts.com.br/",
      image: "/projects/natural-nuts.png"
    },
    { 
      title: "Grafiset", 
      type: "Site Institucional", 
      techs: "HTML, CSS, JavaScript", 
      desc: "Desenvolvimento de Frontend para site institucional com foco em responsividade e performance.", 
      url: "https://grafiset.com.br/",
      image: "/projects/grafiset.png"
    },
    { 
      title: "Instituto da Transformação Digital", 
      type: "Plataforma Institucional", 
      techs: "PHP, React JS, CSS", 
      desc: "Desenvolvimento de Frontend e Backend de site institucional robusto focado em autoridade e conversão.", 
      url: "https://www.institutodatransformacao.com.br/",
      image: "/projects/itd.png"
    }
  ];

  const studyProjects = [
    {
      title: "Articles Next",
      type: "Web Application",
      techs: "Next.js, SCSS, React JS",
      desc: "Desenvolvimento de Frontend para sistema de artigos com foco em performance e componentização.",
      url: "https://articles-next-ecru.vercel.app/",
      image: "/projects/articles.png"
    },
    {
      title: "Estratégia de Otimização de SEO",
      type: "Case de Sucesso / SEO",
      techs: "SEO Técnico, Analytics, GTM",
      desc: "Otimização nos mecanismos de buscas aplicando estratégias avançadas de SEO, resultando no aumento de views em 70% comparado aos 3 meses anteriores.",
      url: "https://www.institutodatransformacao.com.br/",
      image: "/projects/seo-case.png"
    },
    {
      title: "Desenvolvimento de Blog para E-commerce",
      type: "Inbound Marketing / Blog",
      techs: "WordPress / Integração",
      desc: "Estruturação de blog voltado a e-commerce gerando um aumento de 20% de conversão através de estratégias de Inbound Marketing.",
      url: "https://qixskateshop.com.br/blogs/news",
      image: "/projects/qix.png"
    },
    {
      title: "Agência de Viagens Template",
      type: "Landing Page Template",
      techs: "Next.js, SCSS, Node.js",
      desc: "Desenvolvimento Frontend responsivo para site conceito de agência de viagens internacional.",
      url: "https://agencia-de-viagens-azure.vercel.app",
      image: "/projects/travel.png"
    }
  ];

  return (
    <section id="projetos" className="relative py-24 bg-linear-to-b from-zinc-950 via-zinc-900/60 to-zinc-950 overflow-hidden">
      {/* Luzes de Fundo (Glow Effect) para quebrar o Dark chapado */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* ================= PROJETOS RECENTES ================= */}
        <div className="mb-6 animate-fade-in">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Projetos Recentes</h2>
          <p className="mt-2 text-zinc-400 text-sm max-w-2xl">Aplicações comerciais e soluções de e-commerce desenvolvidas para o mercado.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {clientProjects.map((proj, i) => (
            <div 
              key={i} 
              className="group bg-zinc-900/40 backdrop-blur-md rounded-2xl border border-zinc-800/80 hover:border-blue-500/40 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-blue-500/5 hover:-translate-y-2"
            >
              {/* Espaço das Imagens */}
              <div className="relative w-full h-48 bg-zinc-950 overflow-hidden border-b border-zinc-800/50">
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/40 to-transparent z-10" />
                <Image 
                  src={proj.image} 
                  alt={proj.title}
                  fill
                  sizes="(max-w-7xl) 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  priority={i < 3}
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full">
                    {proj.type}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-4 mb-2 group-hover:text-blue-400 transition-colors">{proj.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-4">{proj.desc}</p>
                </div>
                
                <div className="flex items-center justify-between mt-4 border-t border-zinc-800/60 pt-4">
                  <span className="text-[10px] text-zinc-500 font-mono tracking-tight bg-zinc-950 px-2 py-1 rounded border border-zinc-800">{proj.techs}</span>
                  <a 
                    href={proj.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs text-blue-400 group-hover:text-blue-300 font-semibold flex items-center gap-1 transition-all"
                  >
                    Acessar <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= PROJETOS DE ESTUDO ================= */}
        <div className="mb-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Projetos de Estudo & Cases</h2>
          <p className="mt-2 text-zinc-400 text-sm max-w-2xl">Laboratórios de código, clones de interfaces e testes de performance analítica.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {studyProjects.map((proj, i) => (
            <div 
              key={i} 
              className="group bg-zinc-900/40 backdrop-blur-md rounded-2xl border border-zinc-800/80 hover:border-emerald-500/40 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col md:flex-row overflow-hidden shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1.5"
            >
              {/* Espaço das Imagens (Versão Horizontal) */}
              <div className="relative w-full md:w-48 h-48 md:h-auto bg-zinc-950 overflow-hidden border-b md:border-b-0 md:border-r border-zinc-800/50 shrink-0">
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-zinc-950/20 z-10" />
                <Image 
                  src={proj.image} 
                  alt={proj.title}
                  fill
                  sizes="(max-w-7xl) 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div> 

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                    {proj.type}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-4 mb-2 group-hover:text-emerald-400 transition-colors">{proj.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-4">{proj.desc}</p>
                </div>
                
                <div className="flex items-center justify-between mt-2 border-t border-zinc-800/60 pt-4">
                  <span className="text-[10px] text-zinc-500 font-mono tracking-tight bg-zinc-950 px-2 py-1 rounded border border-zinc-800">{proj.techs}</span>
                  <a 
                    href={proj.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs text-emerald-400 group-hover:text-emerald-300 font-semibold flex items-center gap-1 transition-all"
                  >
                    Acessar <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}