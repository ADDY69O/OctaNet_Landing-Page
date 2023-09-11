import React from 'react'

const News = () => {
  return (
    <div className='w-full py-7 text-white px-4'>

        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3  md:grid-cols-2 '>
            <div className='lg:col-span-2'>
                <h1 className='md:text-5xl sm:text-4xl text-3xl  font-bold py-2 '>want to inquiry or any confusion ?</h1>
                <p>Sign up to our form and stay up to data.</p>
            </div>
            <div className='my-4'>
                    <div >
                       <form action="https://formspree.io/f/xbjerrwn"
              method="POST"
             className='flex flex-col  items-center' >
             <input className='bg-white p-3 flex w-full rounded-md text-black my-2' type="text" name="username" id="username" placeholder='Enter name' required/>   
            <input className='bg-white p-3 flex w-full rounded-md text-black my-2' type="email" name="Email" id="Email" required  placeholder='Enter Email'/>
            <textarea className='bg-white p-3 flex w-full rounded-md text-black my-2' name="message" id="message" cols="10" rows="5" placeholder='How can i help you ?'></textarea>
            <button className='bg-[#00df9a] w-[200px] mx-auto my-6 px-7 rounded-md text-black py-3 ' >
                <input type="submit" value="Notify" />
            </button>
          
              </form>
                    </div>  
        <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span> </p>

            </div>

        </div>



        
    </div>
  )
}

export default News