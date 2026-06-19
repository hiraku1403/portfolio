import Link from "next/link";
export default function Navbar() {
 return (
 <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b borderzinc-800">
 <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
 <Link href="#" className="text-lg font-bold text-blue-500 tracking-tight">
 Matheus Sartor Henn
 </Link>
 <div className="flex gap-6 text-sm font-medium text-zinc-400">
 <Link href="#sobre" className="hover:text-white transition">Sobre</Link>
 <Link href="#competencias" className="hover:text-white transition">Skills</Link>
 <Link href="#experiencia" className="hover:text-white transition">Experiência</Link>
 <Link href="#projetos" className="hover:text-white transition">Projetos</Link>
 <Link href="#contato" className="hover:text-white transition">Contato</Link>
 </div>
 </div>
 </nav>
 );
}
