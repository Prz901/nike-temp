import React from 'react'

export default function Banner({ image }) {
  return (
    <div className='w-full'>
      <div className='flex flex-col items-center w-full relative'>
        <div className='flex justify-start w-full px-20'>
          <h1 className='absolute top-20 z-index-image left-half text-4xl font-semibold text-black tracking-wider'>
            Novo lançamento Nike para Você!
          </h1>
        </div>
        <img src={image} alt='produto novo' className='rotate-shoes' />
      </div>
    </div>
  )
}
