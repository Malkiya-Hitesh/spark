import React from 'react'
import { HiOutlineSparkles, HiOutlineUsers, HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi'
import { FaRocket, FaCode, FaBrain, FaTrophy, FaSeedling, FaGlobe, FaLightbulb, FaCog, FaFlask, FaRobot, FaMicrochip, FaPlus, FaMagnet, FaRecycle } from 'react-icons/fa'
import Link from 'next/link'
import Button from './Button'
import SecButton from './SecButton'
import Image from 'next/image'

function Home() {
    return (
        <section className='mt-40 bg-[var(--main-color)] min-h-screen'>

            {/* Hero Section */}
            <div className='grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] relative  justify-center overflow-hidden '>
                {/* Left Content */}
                <div className="space-y-8 relative">
                    {/* Decorative shapes */}
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
                            <Button>  <Link
                                href="/registration"
                                className='text-xl'

                            >
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
                    <div className="absolute top-10 right-10 w-32 h-32 bg-[var(--sec-main-color)] rounded-full opacity-80 transform rotate-12"></div>
                    <div className="absolute bottom-20 left-10 w-24 h-24 bg-[var(--secondary-yello)] rounded-full opacity-70 transform -rotate-12"></div>
                    
                    {/* Sparkle decorations */}
                    <div className="absolute top-20 left-20 text-white text-2xl opacity-60">✨</div>
                    <div className="absolute bottom-40 right-20 text-white text-xl opacity-50">⭐</div>
                    <div className="absolute top-40 right-40 text-white text-lg opacity-70">💫</div>
                    
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
                    <Image className='absolute bottom-10 left-0'
                        src='/image/tan90.png'
                        width={150}
                        height={150}
                        alt='hero decoration' />
                    <Image className='absolute top-[13] right-[-52]'
                        src='/image/top.png'
                        width={400}
                        height={400}
                        alt='hero top' />
                    
                    {/* Plant in bowl decoration */}
                    <div className="absolute bottom-32 right-16 w-8 h-8 bg-[var(--secondary-red)] rounded-full flex items-center justify-center">
                        <FaSeedling className="text-green-500 text-sm" />
                    </div>
                </div>
            </div>

            {/* Footer Icon Strip */}
            <div className="mt-0 grid grid-cols-11 gap-0 overflow-hidden">
                {/* Row 1 - Alternating colors */}
                <div className="bg-[var(--sec-main-color)] h-16 flex items-center justify-center">
                    <FaSeedling className="text-white text-xl" />
                </div>
                <div className="bg-[var(--secondary-blue)] h-16 flex items-center justify-center">
                    <FaGlobe className="text-white text-xl" />
                </div>
                <div className="bg-[var(--secondary-red)] h-16 flex items-center justify-center">
                    <FaLightbulb className="text-white text-xl" />
                </div>
                <div className="bg-[var(--secondary)] h-16 flex items-center justify-center">
                    <FaCog className="text-white text-xl" />
                </div>
                <div className="bg-[var(--sec-main-color)] h-16 flex items-center justify-center">
                    <FaFlask className="text-white text-xl" />
                </div>
                <div className="bg-[var(--secondary-blue)] h-16 flex items-center justify-center">
                    <FaRobot className="text-white text-xl" />
                </div>
                <div className="bg-[var(--secondary-red)] h-16 flex items-center justify-center">
                    <FaMicrochip className="text-white text-xl" />
                </div>
                <div className="bg-[var(--secondary)] h-16 flex items-center justify-center">
                    <FaPlus className="text-white text-xl" />
                </div>
                <div className="bg-[var(--sec-main-color)] h-16 flex items-center justify-center">
                    <FaRocket className="text-white text-xl" />
                </div>
                <div className="bg-[var(--secondary-blue)] h-16 flex items-center justify-center">
                    <FaMagnet className="text-white text-xl" />
                </div>
                <div className="bg-[var(--secondary-red)] h-16 flex items-center justify-center">
                    <FaRecycle className="text-white text-xl" />
                </div>
            </div>

        </section>
    )
}

export default Home