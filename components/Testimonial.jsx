import Comments from '/components/Comments'

function Testimonial() {
    return (
      <div className=' flex flex-col items-center justify-center '>
      
              <p className="uppercase text-gray-400 font-[Fraunces]  text-xl text-center md:mt-30 md:mb-20 mt-20 mb-10">Client testimonial</p>   

              <div className=' flex flex-col md:flex-row  w-screen justify-center items-center'>
                
             <Comments namePic={'emily'} name={'Emily R.'} job={'Marketing director'}/> 
             <Comments namePic={'thomas'} name={'Thomas S.'} job={'chief operating officer'}/> 
             <Comments namePic={'jennie'} name={'Jennie F.'} job={'business owner'} /> 
                </div>     
       
      </div>
    )
}

export default Testimonial
