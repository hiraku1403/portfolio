export default function Skills() {
  const categories = [
    { 
      title: "Desenvolvimento Web", 
      items: ["HTML", "CSS", "JavaScript", "React.JS", "Next.JS", "Vue.js", "Nuxt.js", "WordPress"] 
    },
    { 
      title: "Web Analytics & Dados", 
      items: [
        "Google Analytics", 
        "SEMRush", 
        `Google Search
Console`, 
        "Python", 
        "SQL", 
        "Google Tag Manager"
      ] 
    },
    { 
      title: "Marketing Digital", 
      items: [
        "SEO Técnico", 
        "Inbound Marketing", 
        `Marketing de
Conteúdo`, 
        "E-mail Marketing"
      ] 
    },
    { 
      title: "Gestão & Metodologias", 
      items: [
        "Scrum / Ágil", 
        "Git / GitHub", 
        "Figma", 
        "Resolução de Problemas"
      ] 
    },
  ];

  return (
    <section id="competencias" className="py-20 bg-zinc-900/40">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-10 text-white">Competências</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
              <h3 className="text-blue-400 font-semibold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-xs font-medium border border-zinc-700/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}