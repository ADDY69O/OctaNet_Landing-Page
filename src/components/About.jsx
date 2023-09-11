import React from 'react'
import Typed from 'react-typed';
import my from "../assest/my.jpg"
const About = () => {
  return (
    <div className='text-white '>

<div className=' max-w-[1240px] mt-[3vh] w-full h-screen mx-auto text-center  justify-center'>
{/* <h1 className='md:text-7xl sm:text-6xl  text-4xl font bold md:py-2 '>ABOUT US </h1> */}
<div className='flex sm:flex-row flex-col'>
<img className='my-pic' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />


    <div className='h-full w-[100%] '>
<div className='flex m-5'>
    <h1 className='lg:text-7xl md:text-5xl text-3xl font-bold '> Hi i am 👋 </h1>
    <Typed className='lg:text-7xl md:text-5xl text-[#00df9a] text-3xl font-bold'
                    strings={['Sanjay Kumar']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
    </div>

    <li className='text-xl font-bold m-5 '>Our organization Prateek Enterprises is the most preferred choice of the users for protecting premises from fliers. We are indulged in the manufacturing of  Bird Spikes, Bird Net, Sports  Net, Safety Net, Artificial grass , plant green shade net etc. These nets are best in quality and very light in weight. Offered to the customers in complete safe packing, these nets are superior in quality and completely safe to use for many years. Professionals of our firm make these nets with the use of weather proof material that is durable. These nets are supplied in the market after complete inspection on quality.</li>
<li className='text-xl font-bold m-5'>Our firm has offered these products in different sizes and shapes. Light in weight, these products are best in quality and prepared with the use of best quality embedded raw input that is procured from the reliable vendors available in the market. Best stitching machineries are installed at our firm for the manufacturing of these nets. Professionals of our firm make these products very carefully and supplied in the market after following rigorous examinations. Our firm has large storage and distribution network for these nets.</li>
<li className='text-xl font-bold m-5'>Under the guidance of our leader <span>Mr. Sanjay Kumar</span> we are offering these products to the customers in many sizes and shapes. His extreme patience and friendly nature towards the team members are admirable.</li>

</div>
    </div>


</div>


</div>

     
  )
}

export default About