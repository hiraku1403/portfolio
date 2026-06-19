export default function Contact() {
 return (
 <section id="contato" className="py-20 max-w-4xl mx-auto px-4 text-center">
 <h2 className="text-2xl font-bold mb-4 text-white">Vamos Conversar?</h2>
 <p className="text-zinc-400 max-w-lg mx-auto mb-8 text-sm">
 Estou disponível para novos projetos, consultorias em e-commerce e oportunidades
estratégicas de desenvolvimento.
 </p>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
 <a href="mailto:sartorhenn@gmail.com" className="p-4 bg-zinc-900 rounded-xl border borderzinc-800 hover:border-zinc-700 transition">
 <div className="text-xs text-zinc-500">E-mail</div>
 <div className="text-sm font-semibold text-white">sartorhenn@gmail.com</div>
 </a>
 <a href="https://linkedin.com/in/matheus-henn" target="_blank" rel="noreferrer"
className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-700 transition">
 <div className="text-xs text-zinc-500">LinkedIn</div>
 <div className="text-sm font-semibold text-white">in/matheus-henn</div>
 </a>
 </div>
 </section>
 );
}