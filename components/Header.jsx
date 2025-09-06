import { useState } from 'react'
export default function Header(){
             const [isOpen , setIsOpen] = useState(false)
    return <>
 <div className="bg-[url('/images/mobile/image-header.jpg')]
             md:bg-[url('/images/desktop/image-header.jpg')]
             text-white
             h-screen w-screen
             bg-cover bg-center
             overflow-hidden ">

  
 
  <nav className="p-8">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img src="images/logo.svg" alt="sunnyside" className="h-fit" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 items-center">
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <button className="bg-white text-black rounded-full cursor-pointer px-6 py-3 hover:bg-blue-400/35 uppercase hover:text-white font-fraunces">
            Contact
          </button>
        </ul>

        {/* Hamburger Icon (only on mobile) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src="images/icon-hamburger.svg" alt="menu" className='cursor-pointer'/>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className=" absolute top-16 right-4 w-64 md:hidden mt-3 bg-white rounded-xl shadow-lg py-4 text-center space-y-4  ">
            <ul  className="flex flex-col  text-gray-500  font-[barlow]">

          <a href="#" className="hover:bg-gray-100 py-2">About</a>
          <a href="#"  className="hover:bg-gray-100 py-2">Services</a>
          <a href="#"  className="hover:bg-gray-100 py-2">Projects</a>
            </ul>
          <button className="bg-yellow-400 rounded-full px-6 py-3 text-black font-[Fraunces] uppercase hover:bg-yellow-500">
            Contact
          </button>
        </div>
      )}
    

    </nav>

<p className='font-[Fraunces] text-6xl text-center pt-20'>We are creatives</p>
   </div>
    </>
}