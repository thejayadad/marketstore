'use client'

import React from 'react'
import sprinkle from "../../public/sprinkle.png"
import Image from 'next/image'
import glaze from "../../public/glaze.png"
import custom from "../../public/custom.png"

const Categoryies = () => {
  return (
    <section className='px-4 py-8 h-64 bg-white'>
    <div  className='max-w-screen-xl mx-auto'>
    <h2 className='text-center text-4xl font-bold'>Shop By Category</h2>
        <div className=' flex justify between bg-white md:flex md:flex-col sm:flex sm:flex-col gap-2 lg:flex lg:flex-row lg:gap-2 justify-between h-64 mt-8'>
            <div className='w-full h-64 flex items-center justify-center flex-col'>
            <Image
            className='h-full text-center'
            src={sprinkle}
            height={400}
            width={400}
             />
             <span className='text-center'>Sprinkle</span>
            </div>
            <div className='w-full h-64 flex items-center justify-center flex-col'>
            <Image
            className='h-full text-center'
            src={glaze}
            height={400}
            width={400}
             />
             <span className='text-center'>Glaze</span>
            </div>
            <div className='w-full h-64 flex items-center justify-center flex-col'>
            <Image
            className='h-full text-center'
            src={custom}
            height={400}
            width={400}
             />
             <span className='text-center'>Custom</span>
            </div>
            <div className='w-full h-64 flex items-center justify-center flex-col'>
            <Image
            className='h-full text-center'
            src={custom}
            height={400}
            width={400}
             />
             <span className='text-center'>Custom</span>
            </div>
        </div>  
    </div>
    </section> 
  )
}

export default Categoryies