import LearnMore from "./LearnMore"

function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-full overflow-hidden">
      {/* 1 */}
     

      <div className="flex flex-col justify-center md:text-left text-center  p-16"  >
        <span className="font-[Fraunces] text-3xl md:text-4xl pb-6 ">transform your brand</span>
        <p className=" text-gray-600 break-after-all pb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. miciis nam eaque nisi fugiat excepturi
          repellendus recusandae expedi.
        </p>
       <div>
        
      <LearnMore color={'yellow'}/>
        </div> 
      </div>
      <img
        src="/images/desktop/image-transform.jpg"
        alt="Transform"
        className="w-full h-auto object-cover"
        />
     

     {/* 2 */}
      <img
        src="/images/desktop/image-stand-out.jpg"
        alt="Stand out"
        className="w-full h-auto object-cover"
      />
        <div className="flex flex-col justify-center text-center md:text-left p-16 " >
        <span className="font-[Fraunces] text-3xl md:text-4xl pb-6 ">stand out to the right audience</span>
        <p className=" text-gray-600 break-after-all pb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis eum,
          labore reque exercitationem eius molestiae
          qui magnam itaque autem!
        </p>
       <div>
        <LearnMore color={'red'}/>
        
        </div> 
      </div>

     {/* 3 */}
     {/* img 1 */}
     <div className="relative text-center">
      <img
        src="/images/desktop/image-graphic-design.jpg"
        alt="Graphic design"
        className="w-full h-auto object-cover"
      />
         <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-800 ">
            <h3 className="font-[Fraunces] font-semibold text-2xl md:font-semibold md:text-3xl ">Graphic design</h3>
            <p className="font-[barlow] mt-2 md:mt-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, saepe!</p>
        </div>
     </div>
     {/* img 2 */}
     
        <div className="relative text-center">
  <img src="/images/desktop/image-photography.jpg" className="w-full h-auto object-cover" />
  <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-800 ">
    <h3 className="font-[Fraunces] font-semibold text-2xl md:font-semibold md:text-3xl">photography</h3>
    <p className="font-[Barlow]md:mt-6 mt-2">
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, odio.
    </p>
  </div>
</div>

    </div>
  )
}

export default Services
