import React from "react";

import logo from "../utils/imageBackground/nike-logo.jpg";

import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <img src={logo} alt="nike logo" className="w-1/4" />
      <div>
        <Link to='/home' className='text-gray-200 btn noselect'>Movement Experience</Link>
      </div>
    </div>
  );
}
