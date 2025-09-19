import React from 'react'
import { HiOutlineSparkles, HiOutlineUsers, HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi'
import { FaRocket, FaCode, FaBrain, FaTrophy, FaSeedling, FaGlobe, FaLightbulb, FaCog, FaFlask, FaRobot, FaMicrochip, FaPlus, FaMagnet, FaRecycle } from 'react-icons/fa'
import Link from 'next/link'
import Button from './Button'
import SecButton from './SecButton'
import Image from 'next/image'
import { IconsRow } from './IconsRow'

function Home() {
    return (
        <section className='mt-40 bg-[var(--main-color)]'>

            {/* Hero Section */}
            <div className='grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] relative  justify-center overflow-hidden '>
                {/* Left Content */}
                <div className="space-y-8 relative">
 
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-[var(--secondary)] rounded-full opacity-30"></div>
                    <div className="absolute top-20 -left-5 w-16 h-16 bg-[var(--secondary-red)] rounded-full opacity-40"></div>
                    <div className="absolute top-40 right-0 w-12 h-12 bg-white rounded-full opacity-50"></div>
                    
                    {/* Badge */}
                    <div className="inline-flex items-center font-[700] gap-2 bg-[var(--main-color)]/10 border border-[var(--sec-main-color)]/20 rounded-full px-4 py-2 text-[var(--sec-main-color)]">
                        <HiOutlineSparkles className="text-lg" />
                        <span className="text-xl font-medium ">let's build the future together</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl lg:text-6xl font-[800] text-[var(--bg-color)] leading-tight relative z-10">
                        sustainable, inclusive & full of possibility
                    </h1>



                   <div className="flex flex-row gap-4">
                            <Button>  <Link href="/registration" className='text-xl'>
                                Register Now
                                <FaRocket className="inline ml-2" />
                            </Link></Button>
                            <SecButton>
                                <Link
                                    href="/events"
                                    className='text-xl'
                                >
                                    View Events
                                </Link>
                            </SecButton>
                        </div>
                    <div className='absolute bottom-0 left-0'>
                        <Image 
                            src='/image/hero.svg'
                            width={100}
                            height={100}
                            alt='hero decoration' />
                    </div>


                </div>

                {/* Right Content - Visual Elements */}
                <div className='relative h-[500px] overflow-hidden' >
                    {/* Background shapes */}
                 
                    
                    {/* Sparkle decorations */}
                    <Image className='absolute  bottom-[-22px] w-svh right-[-215px]'
                        src='/image/hero.svg'
                        width={80000}
                        height={80000}
                        alt='hero main' />
                    <Image className='absolute bottom-0 w-full right-0 '
                        src='/image/bg.png'
                        width={1000}
                        height={800}
                        alt='hero background' />
                    <Image className='absolute bottom-[-22px] w-[85%] right-[-95px]'
                        src='/image/hero.png'
                        width={800}
                        height={800}
                        alt='hero main' />
                    <Image className='absolute top-[10px] right-[22px]'
                        src='/image/tan90.png'
                        width={150}
                        height={150}
                        alt='hero decoration' />
                    <Image className='absolute top-[145px]  w-[29%] right-[22px]'
                        src='/image/top.png'
                        width={1000}
                        height={1000}
                        alt='hero top' />
                    

                  
                </div>
                <IconsRow/>
            </div>

            

        </section>
    )
}

export default Home