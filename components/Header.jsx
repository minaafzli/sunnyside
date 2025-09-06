import Navbar from '../components/Navbar'

export default function Header(){
    return <>
 <div className="bg-[url('/images/mobile/image-header.jpg')]
             md:bg-[url('/images/desktop/image-header.jpg')]
             text-white
             h-screen w-screen
             bg-cover bg-center
             overflow-hidden ">
<Navbar/>
<p className='font-[Fraunces] text-6xl text-center pt-20'>We are creatives</p>
   </div>
    </>
}