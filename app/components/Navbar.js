
import { authOptions } from "../api/auth/[...nextauth]/route"

import { getServerSession } from "next-auth"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineEvent } from "react-icons/md";
import { TbCashRegister } from "react-icons/tb";
import { LiaQuestionCircleSolid } from "react-icons/lia";
function Navbar() {







  return (
    <section className="">
      <nav className='grid grid-cols-[0.7fr_1fr] items-center justify-start gap-8 fixed top-0 left-0 pl-2 pr-8 right-0 bg-[var(--bg-color)] text-[var(--text-color)] z-100 pb-[4px] pt-[4px] px-[10px]'>
        <div className="pl-3 flex justify-items-center justify-between items-center ">
          <Image
            className='w-auto h-25'
            src='/image/logo.png'
            width={1000}
            height={1000}
            alt='logo'
          />

        </div>
        <div className='flex justify-items-center justify-between items-center text-[var(--main-color)] '>
          <NavLink params='/'><IoHomeOutline className='text-xl'/>  home </NavLink>
          <NavLink params='/sparc'><HiOutlineLightBulb className='text-xl'/>SPARC 2026</NavLink>
          <NavLink params='/events'> <MdOutlineEvent className='text-xl'/> Event</NavLink>
          <NavLink params='/registration'> <TbCashRegister className='text-xl'/>registration</NavLink>
          <NavLink params='/faq'> <LiaQuestionCircleSolid className='text-xl'/> FAQs help</NavLink>

<Profile/>



        </div>
      </nav>
    </section>
  )
}

export default Navbar



async function Profile() {
  
  "use client";


  let session = null
  try {
    session = await getServerSession(authOptions)
  } catch {
    session = null
  }
console.log(session);

  const  user = session?.user?.userName
  const logoimg = session?.user?.image
  return (
<>

     {user ? (
            <NavLink params={`/user`}>
              <Image
                className='w-8 h-8 rounded-full object-cover'
                src={logoimg}
                width={32}
                height={32}
                alt='profile'
              />
            </NavLink>
          ) : (
            <NavLink params='/log-in'>log in</NavLink>
          )}
   

    </>
  )
}





function NavLink({ params, children }) {
  return (
    <Link

      className={"flex gap-1 items-center justify-center text-[18px] text-[var(--main-color)] border-[var(--sec-main-color)] hover:border-b-[3px] hover:border-[var(--sec-main-color)] transition duration-1000 font-medium"}
      href={params}
    >
      {children}
    </Link>
  )
}