import React from "react";

export default function About() {
  return (
    <div className="w-full flex flex-col justify-start min-h-screen">
      <div className="px-10">
        <div>
          <h1 className="py-3 text-3xl font-bold">Conheça Também</h1>
        </div>
        <div className="grid gap-4 grid-cols-2 w-full">
          <div className="relative">
            <img
              src="https://images.lojanike.com.br/hotsitevitrine/ni/0/1600093075/assets/img/jersey-half.jpg"
              alt="universitarios"
              className=" w-full"
            />
            <div className="absolute top-85 px-10 w-full">
              <p className="py-6 text-white font-light tracking-wide text-lg">
                Nova Central de Uniformes
              </p>
              <div className="flex items-center w-1/2">
                <div className="flex justify-start w-full">
                  <p className=" bg-white text-black py-2 px-6 rounded-full hover:bg-gray-100 cursor-pointer font-medium ">
                    Ver Central
                  </p>
                </div>
                <div className="flex justify-center w-full">
                  <p className="bg-white text-black py-2 px-6 rounded-full hover:bg-gray-100 cursor-pointer font-medium">
                    Ver Camisas
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.lojanike.com.br/hotsitevitrine/ni/0/1600093075/assets/img/chuteiras-half.jpg"
              alt="chuteiras"
              className='w-full'
            />
            <div className="absolute top-85 px-10 w-full">
              <p className="py-6 text-white font-light tracking-wide text-lg">
                Central de Chuteiras
              </p>
              <div className="flex items-center justify-around w-1/2">
                <div className="flex justify-start w-full">
                  <p className=" bg-white text-black py-2 px-6 rounded-full hover:bg-gray-100 cursor-pointer font-medium ">
                    Encontre a Sua
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-2 w-full py-12">
          <div className="relative">
            <img
              src="https://images.lojanike.com.br/hotsitevitrine/ni/0/1600093075/assets/img/sneakers-a-bigger.jpg"
              alt="jordan"
              className='w-full'
            />
            <div className="absolute top-80 px-10 w-full">
              <p className="py-6 text-white font-normal tracking-wide text-lg w-9/12">
                Conheça SNKRS e fique por dentro dos principais lançamentos de
                tênis
              </p>
              <div className="flex items-center w-1/2">
                <div className="flex justify-start w-full">
                  <p className=" bg-white text-black py-2 px-6 rounded-full hover:bg-gray-100 cursor-pointer font-medium ">
                    Saiba Mais
                  </p>
                </div>
                <div className="flex justify-center w-full">
                  <p className="bg-white text-black py-2 px-6 rounded-full hover:bg-gray-100 cursor-pointer font-medium">
                    Ver SNKRS
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.lojanike.com.br/hotsitevitrine/ni/0/1600093075/assets/img/apps-half-01.jpg"
              alt="NRC"
              className='w-full'
            />
            <div className="absolute top-80 px-10 w-full">
              <p className="py-6 text-white font-normal tracking-wide text-lg w-9/12">
                Encontre o suporte necessário para suas corridas e treinos nos
                Apps <span className='font-semibold text-danger-500'>NRC</span> e <span className='font-semibold text-danger-400'>NTC</span>
              </p>
              <div className="flex items-center  w-1/2">
                <div className="flex justify-start w-full">
                  <p className=" bg-white text-black py-2 px-6 rounded-full hover:bg-gray-100 cursor-pointer font-medium ">
                    Ver NRC
                  </p>
                </div>
                <div className="flex justify-center w-full">
                  <p className="bg-white text-black py-2 px-6 rounded-full hover:bg-gray-100 cursor-pointer font-medium">
                    Ver NTC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
