'use client';


export default function Contato() {
  return (
     <main className="bg-bege">
        <section className="flex flex-col items-center">
            <h1 className="text-5xl font-titulo text-mescuro font-normal pt-12"> 
                Contato
            </h1>
            <form className="flex flex-col py-12 gap-4 font-texto font-medium">
                <div className="flex  flex-row gap-6">
                    <div className="flex flex-col gap-2.5">
                        <input className="focus:outline-none text-sm rounded-lg py-2 text-mescuro  border-mescuro border-2 pr-28 pl-2" placeholder="Nome"/>
                        <input className="focus:outline-none text-sm rounded-lg py-2 text-mescuro  border-mescuro border-2 pr-28 pl-2" placeholder="Email"/>
                        <input className="focus:outline-none text-sm rounded-lg py-2 text-mescuro  border-mescuro border-2 pr-28 pl-2" placeholder="Assunto"/>
                    </div>
                    <textarea className="focus:outline-none text-sm rounded-lg pb-24 pt-2 text-mescuro  border-mescuro border-2 pr-28 pl-2" placeholder="Mensagem:">

                    </textarea>
                </div>
                <button className="focus:outline-none text-sm rounded-lg py-2 text-bege bg-mescuro border-mescuro border-2">
                    Enviar
                </button>
            </form>

        </section>
     </main>
  );
}
