export default function Experience() {
  const exps = [
    {
      role: "Desenvolvedor Frontend e Python",
      company: "VALCANN (São Paulo/SP)",
      period: "mai/2025 – atual",
      desc: `Manutenção técnica e otimização do ecossistema utilizando Next.js e Python.
Aplicação de boas práticas avançadas de SEO, gerando um aumento de 35% na taxa de cliques da
busca orgânica. Atuação em ambiente ágil com metodologia Scrum e controle de versão rigoroso via
GitHub.`
    },
    {
      role: "Gerente de E-commerce",
      company: "Natural Nuts (São Paulo/SP)",
      period: "jan/2019 – abr/2025",
      desc: `Monitoramento analítico de performance web (GA e SEMRush) com geração de dashboards
customizados em PHP integrando Google Search Console. Implementação de estratégias de conteúdo e
SEO que geraram 40% de crescimento em tráfego orgânico em 12 meses.`
    },
    {
      role: "Desenvolvedor Front-End / Estrategista",
      company: "Agência Instituto da Transformação Digital",
      period: "fev/2011 – dez/2018",
      desc: `Desenvolvimento de sites corporativos e portais de alta performance com foco em UX/
UI utilizando HTML, CSS, JavaScript e SEO analítico. Geração de relatórios de performance
orientados a dados para suporte às decisões de marketing.`
    }
  ];

  return (
    <section id="experiencia" className="py-20 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-10 text-white">Experiência Profissional</h2>
      <div className="space-y-12 border-l-2 border-zinc-800 pl-6 ml-2">
        {exps.map((exp, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-7.75 top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-zinc-950"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <h3 className="text-lg font-bold text-white mt-0">{exp.role}</h3>
              <span className="text-sm text-zinc-500 font-medium">{exp.period}</span>
            </div>
            <div className="text-blue-400 font-medium text-sm mb-3">{exp.company}</div>
            <p className="text-zinc-400 text-sm leading-relaxed">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}