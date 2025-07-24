import React, { useRef, useState } from 'react'
import Cards from './Cards'
function Foreground() {
    const ref =useRef(null);
    const data=[
        {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize:"0.8mb",
            close:false,
            tag:{isopen:false,title:"download"}

        },{
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing.jbdjjgfugtr",
            filesize:"0.2mb",
            close:true,
            tag:{isopen:true,title:"download"}
        },{
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing.nvfjnvif hfurehfureh hfuhrht",
            filesize:"1 mb",
            close:true,
            tag:{isopen:true,title:"download"}
        }
    ]
  return (
    
         <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full p-5 flex gap-[40px] flex-wrap'>
           
           {
            data.map((item)=>(<Cards data={item} reference={ref}/>))
           } 
         </div>

    
  )
}

export default Foreground
