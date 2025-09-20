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
        <section className='min-h-screen bg-[var(--main-color)] overflow-hidden mt-28'>
            <div className=' m-auto px-2 '>
                <div className='grid grid-cols-1 lg:grid-cols-2  justify-center items-center'>
                    {/* Left Content */}
                    <div className="mx-auto z-10">
                        {/* Badge */}
                        <div className="flex items-center justify-center font-[700] gap-2 bg-[var(--main-color)]/10 border border-[var(--sec-main-color)]/20 rounded-full px-4 py-2 text-[var(--sec-main-color)]  backdrop-blur-sm">
                            <span className="text-sm sm:text-base lg:text-lg font-medium">let&apos;s build the future together</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-[800] text-[var(--bg-color)] leading-tight relative z-10">
                            <span className="block">sustainable,</span>
                            <span className="block">inclusive & full</span>
                            <span className="block">of possibility!</span>
                        </h1>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-7">
                            <Button className="w-full sm:w-auto">
                                <Link href="/registration" className='text-lg sm:text-xl flex items-center justify-center'>
                                    Register Now
                                    <FaRocket className="inline ml-2" />
                                </Link>
                            </Button>
                            <SecButton className="w-full sm:w-auto">
                                <Link
                                    href="/events"
                                    className='text-lg sm:text-xl'
                                >
                                    View Events
                                </Link>
                            </SecButton>
                        </div>


                    </div>

                    {/* Right Content - Visual Elements */}
                    <div className='relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden'>



                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                                className='object-contain max-w-full max-h-full'
                                src='/image/hero1.png'
                                width={600}
                                height={600}
                                alt='hero main'
                                priority
                            />
                        </div>


                    </div>
             
                </div>
                <div className="flex justify-center items-center">
                        <IconsRow />
                    </div>
            </div>

            {/* Icons Row */}

        </section>
    )
}

export default Home