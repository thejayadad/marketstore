'use client'

import React from 'react'
import { FaYoutube, FaTiktok, FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';


const Social = () => {
  return (
    <div className='flex space-x-4'>
    <span href='#' className='text-red-500 hover:text-red-600 transition-colors cursor-pointer'>
        <FaYoutube size={24} />
    </span>
    <span href='#' className='text-black-500 hover:text-black-500 transition-colors cursor-pointer'>
        <FaTiktok size={24} />
    </span>
    <span href='#' className='text-blue-500 hover:text-blue-400 transition-colors cursor-pointer'>
        <FaTwitter size={24} />
    </span>
    <span href='#' className='text-pink-500 hover:text-pink-500 transition-colors cursor-pointer'>
        <FaInstagram size={24} />
    </span>
    </div>
  )
}

export default Social