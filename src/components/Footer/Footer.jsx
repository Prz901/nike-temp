import React from "react";

export default function Footer() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex flex-col items-center ">
        <h1 className="text-5xl font-black w-9/12 tracking-wider uppercase ">
          <span className="flex justify-center">Onde todos os Atletas</span>{" "}
          <span className=" flex justify-center">se encontram</span>{" "}
        </h1>
        <div>
          <p className="py-4 tracking-wide font-thin text-lg">
            Tenha acesso aos melhores produtos, inspiração e à nossa comunidade
          </p>
        </div>
        <div>
          <p className="bg-black text-white py-2 px-4 font-semibold rounded-full cursor-pointer hover:opacity-75">
            Junte-se a Nós
          </p>
        </div>
      </div>
      <div className="px-20 py-32">
        <div className="grow">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="cursor-pointer tracking-widecontent">Ofertas</h2>
              <p className="hover:text-black cursor-pointer py-2 text-gray-300 tracking-wide">
                Últimas unidades
              </p>
              <p className="hover:text-black cursor-pointer text-gray-300 tracking-wide">
                Masculino
              </p>
              <p className="hover:text-black cursor-pointer py-2 text-gray-300 tracking-wide">
                Feminino
              </p>
            </div>
            <div>
              <h2 className="cursor-pointer tracking-wide ">Calçados</h2>
              <p className="hover:text-black cursor-pointer py-2 text-gray-300 tracking-wide">
                Casual
              </p>
              <p className="hover:text-black cursor-pointer text-gray-300 tracking-wide">
                Corrida
              </p>
              <p className="hover:text-black cursor-pointer py-2 text-gray-300 tracking-wide">
                Chuteiras
              </p>
              <p className="hover:text-black cursor-pointer text-gray-300 tracking-wide">
                Basquete
              </p>
              <p className="hover:text-black cursor-pointer py-2 text-gray-300 tracking-wide">Treino & Academia</p>
              <p>Skateboarding</p>
              <p className="hover:text-black cursor-pointer py-2 text-gray-300 tracking-wide">Para jogar Tênis</p>
            </div>
            <div>
              <h2 className="cursor-pointer tracking-wide ">Roupas</h2>
              <p className="hover:text-black cursor-pointer py-2 text-gray-300 tracking-wide">
                Tops
              </p>
              <p className="hover:text-black cursor-pointer text-gray-300 tracking-wide">
                Camisetas
              </p>
              <p className="hover:text-black cursor-pointer py-2 text-gray-300 tracking-wide">
                Shorts
              </p>
              <p className="hover:text-black cursor-pointer text-gray-300 tracking-wide">
                Camisetas de Times
              </p>
            </div>
            <div>
              <h2 className="cursor-pointer tracking-wide ">Acessórios</h2>
              <p className="hover:text-black cursor-pointer py-2 text-gray-300 tracking-wide">
                Bonés & Viseiras
              </p>
              <p className="hover:text-black cursor-pointer text-gray-300 tracking-wide">
                Bolsas & Mochilas
              </p>
              <p className="hover:text-black cursor-pointer py-2 text-gray-300 tracking-wide">
                Bolas
              </p>
              <p className="hover:text-black cursor-pointer text-gray-300 tracking-wide">
                Meias
              </p>
            </div>
            <div>
              <h2 className="cursor-pointer tracking-wide ">Destaques</h2>
              <p className="hover:text-black cursor-pointer py-2 text-gray-300 tracking-wide">
                Lançamentos
              </p>
              <p className="hover:text-black cursor-pointer text-gray-300 tracking-wide">
                Exclusivo Membros
              </p>
              <p className="hover:text-black cursor-pointer py-2 text-gray-300 tracking-wide">
                Coleção Unissex
              </p>
              <p className="hover:text-black cursor-pointer text-gray-300 tracking-wide">
                Guia de Tops
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
