  import React from 'react'
  import net from "../assest/bird-net.webp"
  const Analytics = () => {
    return (
      <div className='w-full bg-white py-16 px-4'>

          <div className='bg-white max-w-[1240px] mx-auto grid md:grid-cols-2'>

              <img className='bg-white w-[500px] mx-auto my-4' src={net} alt="/" />
          <div className='bg-white text-black'>
              <p className='bg-white text-[#00df9a] font-bold'>Dashboard</p>
              <h1 className='bg-white md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Bird Control management </h1>
              <p className='bg-white  '>   Bird control is the method to eliminate or deterrents birds from landing,roosting and nesting.Bird control service is important because pest can create health-related problems through there feces.
                  <li className='bg-white'>We use HDPE-UV,  polymer net and barriers & bird spikes at low price for bird control service.</li>
                  <li className='bg-white'> We offer pigeon net for bolcony at low cost with our highly experienced technical team</li>
              </p>
              <button className='bg-black text-[#00df9a] w-[200px] mx-auto my-6 px-7 rounded-md ml-[25%] py-3'>Get Started</button>
        
          </div>

          </div>
      </div>
    )
  }

  export default Analytics