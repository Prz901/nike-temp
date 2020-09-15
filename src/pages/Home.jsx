import React from "react";

export default function Home() {
  return (
    <div className="px-20 py-20 flex flex-col h-screen">
      <div className="nike"></div>
      <div className="flex items-center justify-end ">
        <p className="px-4 tracking-wider">Home</p>
        <p className="px-4 tracking-wider">About</p>
        <p className="px-4 tracking-wider">Products</p>
        <p className="px-4 tracking-wider">Contact</p>
      </div>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-thin py-3 tracking-wide">
            Nike Movement Experience
          </h1>
          <p className="py-2 text-xl font-thin text-gray-400">
            A iniciative with nike to colaborate to your <span>clients</span>
          </p>
          <div className='py-2'>
            <p className='text-base font-thin tracking-widest'>
              It's a start pack and you can modify your shoes and make pictures
              of then
            </p>
            <p className='text-base font-thin tracking-widest'>
              It's a start pack and you can modify your shoes and make pictures
              of then
            </p>
          </div>

          <div className="flex items-center py-4">
            <p className='btn-home noselect-home'>Join Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}
