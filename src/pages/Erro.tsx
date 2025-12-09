import { Header_Public } from '@/components/Header/header_public'
import Footer from '../components/Footer'
import '../index.css'
import { Link } from 'react-router-dom';


export default function Erro() {
  return (
    <div className="flex flex-col items-center gap-15 min-h-screen text-white font-poppins">
      <Header_Public />
      <main className='flex flex-1 flex-col items-center justify-center p-8'>
        <div className="text-azul-claro border border-azul-claro rounded-[22px] p-12 md:p-16 text-center max-w-lg w-full">
            <h1 className="text-8xl font-bold mb-2 tracking-tighter">
                404
            </h1>
    
            <h2 className="text-xl md:text-2xl uppercase tracking-widest font-semibold mb-6 border-b-2 border-azul-claro pb-4 inline-block">
                Página não encontrada
            </h2>
    
            <p className="text-gray-600 mb-8 text-lg">
                Ops! Parece que você tentou acessar uma página inexistente.
            </p>
    
            <Link to="/" className="inline-block w-full md:w-auto px-8 py-4 bg-azul-escuro text-white font-bold uppercase tracking-wider hover:text-verde-claro transition-transform active:scale-95">
                Voltar para o Início
            </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}