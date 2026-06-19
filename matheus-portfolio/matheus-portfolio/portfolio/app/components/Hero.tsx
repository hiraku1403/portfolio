export default function Hero() {
 return (
 <section className="min-h-screen flex items-center justify-center pt-16 px-4 bg-[radialgradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black">
 <div className="text-center max-w-3xl">
 <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white bordernone">
 Matheus Sartor Henn
 </h1>
 <p className="text-xl md:text-2xl font-medium text-blue-400 mb-6">
 Desenvolvedor Frontend & Especialista SEO
 </p>
 <p className="text-zinc-400 text-base md:text-lg mb-8 max-w-2xl mx-auto">
 Especializado em construir e-commerces de alta performance, arquiteturas escaláveis
com React/Next.js e otimização analítica com foco em resultados reais de negócio.
 </p>
 <div className="flex justify-center gap-4">
 <a href="#projetos" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 textwhite font-medium transition">Ver Projetos</a>
 <a href="#contato" className="px-6 py-3 rounded-lg border border-zinc-700 hover:bgzinc-900 text-zinc-300 font-medium transition">Entre em Contato</a>
 </div>
 </div>
 </section>
 );
}