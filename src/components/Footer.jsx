import React from 'react'

    import{
        FaDribbbleSquare,
        FaFacebookSquare,
        FaGithubSquare,
        FaInstagram,
        FaTwitterSquare,

    }from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 '>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Prateek Enterprises</h1>
            <p className='py-4'>Our organization Prateek Enterprises is the most preferred choice of the users for protecting premises from fliers. We are indulged in the manufacturing of  Bird Spikes, Bird Net, Sports  Net, Safety Net, Artificial grass , plant green shade net etc. These nets are best in quality and very light in weight.



</p>
            <div className='flex justify-between my-6 md:w-[75%]'>
                <FaDribbbleSquare size={30}  />
                <FaFacebookSquare size={30}  />
                <FaGithubSquare   size={30}  />
                <FaInstagram      size={30}   />
                <FaTwitterSquare  size={30}  />

            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6 '>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='text-sm py-2'>Bird net</li>
                    <li className='text-sm py-2'>Spike</li>
                    <li className='text-sm py-2'>green shade net</li>
                    <li className='text-sm py-2'>Artificial Grass</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='text-sm py-2'>About</li>
                    <li className='text-sm py-2'>Blog</li>
                    <li className='text-sm py-2'>Jobs</li>
                    <li className='text-sm py-2'>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='text-sm py-2'>Bird net</li>
                    <li className='text-sm py-2'>Spike</li>
                    <li className='text-sm py-2'>green shade net</li>
                    <li className='text-sm py-2'>Artificial Grass</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='text-sm py-2'>Claim</li>
                    <li className='text-sm py-2'>Policy</li>
                    <li className='text-sm py-2'>Terms</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Footer