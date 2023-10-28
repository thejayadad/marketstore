'use client'

import React from 'react'
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from 'react-icons/fa';
import { signOut, useSession } from "next-auth/react";



const AuthLinks = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { status } = useSession();


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navigationLinks = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '/contact' },
  ];


  return (
    <div className="md:flex flex items-center space-x-4">
        <span onClick={signOut}>
        Logout
        </span>
      <div 
      style={{zIndex: 100}}
      className="md:hidden">
      <button onClick={toggleMenu} className="text-2xl text-[#FF4500] focus:outline-none z-[100]">
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>        
      </div>
      {menuOpen && (
        <div className="md:hidden fixed top-0 right-0 h-screen w-screen flex flex-col items-center justify-center bg-black bg-opacity-70">
        {navigationLinks.map((link, index) => (
            <Link key={index} href={link.link}>
            <span className="block text-white text-2xl hover:underline hover:text-[#FF4500] transition-colors">{link.text}</span>
        </Link>
        ))}
        </div> 
      )}
   </div>
  )
}

export default AuthLinks