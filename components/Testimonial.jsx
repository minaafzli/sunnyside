import Comments from '/components/Comments'

function Testimonial() {
    return (
      <div className=' flex flex-col items-center justify-center lg:h-screen'>
      
              <p className="uppercase text-gray-400 font-[Fraunces]  text-xl text-center mt-20 md:mt-0 md:pt-20">Client testimonial</p>   

              <div className=' flex flex-col md:flex-row  w-screen justify-center items-center mt-20'>
                
             <Comments namePic={'emily'} name={'Emily R.'} job={'Marketing director'}/> 
             <Comments namePic={'thomas'} name={'Thomas S.'} job={'chief operating officer'}/> 
             <Comments namePic={'jennie'} name={'Jennie F.'} job={'business owner'} /> 
                </div>     
       
      </div>
    )
}

export default Testimonial
