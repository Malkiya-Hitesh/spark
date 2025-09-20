"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineEvent } from "react-icons/md";
import { TbCashRegister } from "react-icons/tb";
import { LiaQuestionCircleSolid } from "react-icons/lia";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="">
      <nav className='flex items-center justify-between fixed top-0 left-0 right-0 bg-[var(--bg-color)] text-[var(--text-color)] z-50 pb-2 pt-2 px-4 lg:px-8'>
        <div className="flex items-center">
          <Image
            className='w-auto h-16 lg:h-20'
            src='/image/logo.png'
            width={1000}
            height={1000}
            alt='logo'
          />
        </div>

        {/* Desktop Navigation */}
        <div className='hidden justify-between lg:flex items-center space-x-6 xl:space-x-8 text-[var(--main-color)]'>
          <NavLink params='/'><IoHomeOutline className='text-xl'/> home </NavLink>
          <NavLink params='/sparc'><HiOutlineLightBulb className='text-xl'/>SPARC 2026</NavLink>
          <NavLink params='/events'> <MdOutlineEvent className='text-xl'/> Event</NavLink>
          <NavLink params='/registration'> <TbCashRegister className='text-xl'/>registration</NavLink>
          <NavLink params='/faq'> <LiaQuestionCircleSolid className='text-xl'/> FAQs help</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className='lg:hidden text-[var(--main-color)] text-2xl p-2'
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`fixed top-0 left-0 right-0 bg-[var(--bg-color)] shadow-lg transition-all duration-300 ease-in-out lg:hidden z-50 ${
          isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}>
          
          <div className='flex flex-col space-y-2 p-4 text-[var(--main-color)]'>

          <button
          onClick={toggleMenu}
          className='lg:hidden text-[var(--main-color)] text-2xl p-2'
          aria-label="Toggle menu"
        >
        <HiX /> 
        </button>
            <MobileNavLink params='/' onClick={toggleMenu}>
              <IoHomeOutline className='text-xl'/> home
            </MobileNavLink>
            <MobileNavLink params='/sparc' onClick={toggleMenu}>
              <HiOutlineLightBulb className='text-xl'/>SPARC 2026
            </MobileNavLink>
            <MobileNavLink params='/events' onClick={toggleMenu}>
              <MdOutlineEvent className='text-xl'/> Event
            </MobileNavLink>
            <MobileNavLink params='/registration' onClick={toggleMenu}>
              <TbCashRegister className='text-xl'/>registration
            </MobileNavLink>
            <MobileNavLink params='/faq' onClick={toggleMenu}>
              <LiaQuestionCircleSolid className='text-xl'/> FAQs help
            </MobileNavLink>
          </div>
        </div>

      </nav>
    </section>
  )
}

export default Navbar

function NavLink({ params, children }) {
  return (
    <Link
      className="flex gap-1 items-center justify-center text-[16px] lg:text-[18px] text-[var(--main-color)] border-[var(--sec-main-color)] hover:border-b-[3px] hover:border-[var(--sec-main-color)] transition duration-1000 font-medium px-2 py-1"
      href={params}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ params, children, onClick }) {
  return (
    <Link
      className="flex gap-2 items-center text-[16px] text-[var(--main-color)] hover:bg-[var(--sec-main-color)] hover:text-white transition duration-300 font-medium px-4 py-3 rounded-lg"
      href={params}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

// async function Profile() {
  
//   "use client";


//   let session = null
//   try {
//     session = await getServerSession(authOptions)
//   } catch {
//     session = null
//   }
// console.log(session);

//   const  user = session?.user?.userName
//   const logoimg = session?.user?.image
//   return (
// <>

//      {user ? (
//             <NavLink params={`/user`}>
//               <Image
//                 className='w-8 h-8 rounded-full object-cover'
//                 src={logoimg}
//                 width={32}
//                 height={32}
//                 alt='profile'
//               />
//             </NavLink>
//           ) : (
//             <NavLink params='/log-in'>log in</NavLink>
//           )}
   

//     </>
//   )
// }