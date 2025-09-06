export default function Header(){
    return <>
 

  <nav className='p-8'>
    <div className='flex justify-between items-center'>

    <img src="images/logo.svg" alt="sunnyside" className='h-fit'/>
    
      <ul className='flex gap-4 items-center'>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <button className='bg-white text-black rounded-full  cursor-pointer px-6 py-3 hover:bg-blue-500/35
    uppercase
        hover:text-white font-[Fraunces]'>contacts</button>
      </ul>
    </div>
  </nav>
  
    </>
}