import React from 'react'
import Typed from 'react-typed';
const Hero = () => {
  return (
    <div className='text-white'>
        <div className=' max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
           <p className='text-xl font-bold p-2 text-[#00df9a]'>Prateek Enterprises </p>
           <h1 className='md:text-7xl sm:text-6xl  text-4xl font bold md:py-2 '> Netting Services.</h1>
           <div className= ' flex md:flex-row sm:flex-row flex-col  justify-center items-center '>
            <p className='md:text-2xl sm:text-xl text-xl font-bold p-2'>fast , flexible and financing for installation of</p>    
            <Typed className='md:text-2xl sm:text-xl text-xl font-bold'
                    strings={['Anti Bird Net','Spike','Green Shade net','Artificial Grass']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
                </div>
                <p className='md:text-2xl sm:text-2xl text-xl text-gray-600 font-bold '>Manufacturing and trading a wide variety of anti-birds nets, bird spikes, and Artificial grasses.</p>
            <button className='bg-[#00df9a] w-[200px] mx-auto my-6 px-7 rounded-md text-black py-3'>Get Started</button>
             </div>
         


    </div>
  )
}

export default Hero