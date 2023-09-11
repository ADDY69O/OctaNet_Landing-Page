  import React,{useState} from 'react'
  import logo from "../assest/logo.jpg"
  import {Link} from "react-router-dom";
  import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
  const Navbar = () => {
      const [nav, setnav] = useState(false)
      const handlenav=()=>{
        setnav(!nav);
      }
    return (
      <div className='text-white  flex justify-between h-24 px-4 items-center mx-w-[1240px] mx-auto '>
        
        {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'  >Prateek ENTR.</h1> */}
     <Link to="/">   <img className='h-20 w-20 rounded-full' src={logo} alt="/" />
     </Link>

        <ul className=' hidden  md:flex '>
          <li className='p-4 '>
            
          <Link to='/' >
              Home
            </Link></li>
          <li className='p-4 '><Link to='/about'>
              About
            </Link></li>
           
          <li className='p-4  '><Link to='/contact'>
              Contact
            </Link> </li>
        </ul>
      
        <div onClick={handlenav} className="md:hidden">

          {nav?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
        </div>
        
        <div className={nav?'fixed left-0 top-0  w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-200  ':"fixed top-0 left-[-100%] "}>
           
        {/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 mt-7'  >Prateek ENTR.</h1> */}
        <img className='h-20 w-20 rounded-full' src={logo} alt="/" />
        <ul  className=' uppercase p-4'>
          <li className='p-4 border-b border-gray-500'><Link to='/' onClick={handlenav}>
              Home
            </Link></li>
          <li className='p-4 border-b border-gray-500'><Link to='/about' onClick={handlenav}>
              About
            </Link></li>
          
          <li className='p-4  '><Link to='/contact' onClick={handlenav}>
              Contact
            </Link> </li>
        </ul>
        </div>

        </div>
    )
  }

  export default Navbar