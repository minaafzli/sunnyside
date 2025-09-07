function comments({namePic , name , job}) {
    return (
        <div className="w-80 items-center flex flex-col mb-10">
<img 
  src={`/images/image-${namePic}.jpg`} 
  alt={namePic} 
  className="rounded-full w-16  mb-10 mt-5 "
/>


<p className="text-gray-600 mb-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsa laudantium quas repudiandae, quos eligendi necessita!</p>

<p className="font-[Fraunces] font-extrabold ">{name}</p>
<p className="font-[barlow] text-gray-400 font-light">{job}</p>
        </div> 
    )
}

export default comments
