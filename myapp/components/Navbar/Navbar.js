'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Social from '../Social';
import AuthLinks from '../AuthLinks';

const Navbar = () => {
  return (
    <header className='px-4 py-8  sticky top-0 bg-white'>
        <div className='flex justify-between items-center max-w-screen-xl mx-auto'>
            <Link href={'/'}>DonutShop</Link>
            <div className='hidden md:flex space-x-4'>
                <Social />
            </div>
            <div className='flex items-center gap-2'>
                <Link className='sm:hidden md:hidden lg:block' href={'/'}>Home</Link>
                <Link className='sm:hidden md:hidden lg:block' href={'/about'}>About</Link>
                <Link className='sm:hidden md:hidden lg:block' href={'/contact'}>Contact</Link>
                <AuthLinks />
            </div>
        </div>
    </header>
  )
}

export default Navbar