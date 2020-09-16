import React from 'react'

import About from '../components/About/About'
import run from '../utils/imageBackground/nike-run.jpg'

import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <div className=' flex flex-col h-screen w-full bg-white relative'>
        <div className='fixed bg-white z-10 w-full '>
          <div className='flex items-center justify-between border-solid border-t border-gray-300  w-full '>
            <div className='flex w-1/2'>
              <div className='border-r border-solid border-gray-300 w-1/12'>
                <div className='flex  justify-center '>
                  <img
                    src='https://images.lojanike.com.br/topbar/ni/9_20190522191510.svg'
                    alt=''
                    className='min-logo py-2 opacity-25 cursor-pointer hover:opacity-100'
                  />
                </div>
              </div>
              <div className='border-r border-solid border-gray-300 w-3/12'>
                <div className='flex  items-center justify-center h-full  opacity-25 cursor-pointer hover:opacity-100'>
                  <p>Junte-se a Nós</p>
                </div>
              </div>
              <div className='border-r border-solid border-gray-300 w-1/12'>
                <div className='flex  justify-center '>
                  <img
                    src='https://images.lojanike.com.br/topbar/ni/8_20190522191105.png'
                    alt=''
                    className='min-logo py-2 opacity-25 cursor-pointer hover:opacity-100'
                  />
                </div>
              </div>
              <div className='border-r border-solid border-gray-300 w-1/12'>
                <div className='flex  items-center h-full justify-center '>
                  <img
                    src='https://images.lojanike.com.br/topbar/ni/12_20200512184709.png'
                    alt=''
                    className='min-logo py-2 opacity-25 cursor-pointer hover:opacity-100'
                  />
                </div>
              </div>
            </div>
            <div className='flex items-center justify-end w-1/2 '>
              <div className=' w-2/12'>
                <div className='flex  items-center justify-center h-full  opacity-25 cursor-pointer hover:opacity-100'>
                  <p className='text-base'>Acompanhar Pedidos</p>
                </div>
              </div>
              <div className=' w-2/12'>
                <div className='flex  items-center justify-center h-full  opacity-25 cursor-pointer hover:opacity-100'>
                  <p className='text-base'>Login/ Increver-se</p>
                </div>
              </div>
              <div className=' w-1/12'>
                <div className='flex  items-center justify-center h-full  opacity-25 cursor-pointer hover:opacity-100'>
                  <p className='text-base'>Ajuda</p>
                </div>
              </div>
              <div className=' w-1/12'>
                <div className='flex  items-center justify-center h-full  opacity-25 cursor-pointer hover:opacity-100'>
                  <i className='fas fa-shopping-cart' />
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center w-full border-solid border-gray-300 border-1 px-20 py-4'>
            <p className='px-4 tracking-wider uppercase font-medium animate-border'>Aniversario Nike.com</p>
            <p className='px-4 tracking-wider uppercase font-medium animate-border'>Ofertas</p>
            <p className='px-4 tracking-wider uppercase font-medium animate-border'>Lançamentos</p>
            <p className='px-4 tracking-wider uppercase font-medium animate-border'>Masculino</p>
            <p className='px-4 tracking-wider uppercase font-medium animate-border'>Feminino</p>
            <p className='px-4 tracking-wider uppercase font-medium animate-border'>Infantil</p>
            <p className='px-4 tracking-wider uppercase font-medium animate-border'>Snkrs</p>
          </div>
        </div>

        <div className='flex items-center justify-between h-full w-full'>
          <img src={run} alt='corrida' className='px-20 w-1/2' />
          <div className='flex flex-col justify-center items-end h-full w-full px-32'>
            <div className='flex flex-col items-start justify-center w-full'>
              <h1 className='text-4xl font-thin py-3 tracking-wide'>Nike Movement Experience</h1>
              <p className='py-2 text-xl font-thin text-gray-500'>Uma iniciativa da Nike para seus fíeis clientes</p>
              <div className='py-4 w-9/12'>
                <p className='text-base font-thin tracking-widest py-2'>
                  Temos um starter pack para voce que não quer gastart muito
                </p>
                <p className='text-base font-thin tracking-widest py-2'>Para aqueles que querem aceitar o desagio</p>
                <p className='text-base font-thin tracking-widest py-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                  Deleniti cupiditate quos praesentium blanditiis nostrum, modi, <br />
                  impedit corporis quo in aut laboriosam facere nemo iste, provident animi obcaecati a libero consequatur?
                </p>
              </div>

              <div className='flex items-center py-4'>
                <p className='btn-home noselect-home'>Junte-se a Nós</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      {/* <Banner image={'https://images.lojanike.com.br/hotsitevitrine/ni/0/1600093075/assets/img/mobile/phantom.jpg'}/> */}
      <Footer />
    </>
  )
}
