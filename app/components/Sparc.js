import Image from 'next/image'
import React from 'react'
import { IconsRow } from '../components/IconsRow'


function Sparc() {
    return (
        <section className='mt-20 lg:mt-24 flex justify-center items-center pb-8 gap-4 lg:gap-7 flex-col bg-[var(--white-color)] pt-6 px-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6 lg:gap-8 w-full max-w-6xl'>
                <div className="flex justify-center items-center order-2 lg:order-1">
                    <Image
                        className='w-auto h-22 sm:h-40 lg:h-45'
                        src='/image/logo.png'
                        width={1000}
                        height={1000}
                        alt='logo'
                    />
                </div>
                <div className='flex flex-col justify-center items-center lg:items-end text-center lg:text-right text-[var(--sec-main-color)] order-1 lg:order-2'>
                    <h2 className='font-[800] text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] leading-tight'>
                        <span>OFFICIALLY</span>
                    </h2>
                    <h2 className='font-[800] text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] leading-tight'>
                        <span>OPEN !</span>
                    </h2>
                    <p className='font-[400] text-[1.2rem] sm:text-[1.5rem] lg:text-[2rem] text-[var(--text-color)] mt-2'>let the challenge begin !</p>
                </div>
            </div>
            <div className='mt-4 lg:mt-6'>
                <button
                    className={`bg-[var(--main-color)] text-[var(--white-color)] px-6 lg:px-8 py-2 lg:py-3 rounded-lg font-semibold text-base lg:text-lg hover:bg-[var(--bg-color)]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                >
                    register now !
                </button>
            </div>
            <div className='mt-4 lg:mt-6 w-full max-w-4xl overflow-hidden'>
                <IconsRow/>
            </div>

        </section>
    )
}

export default Sparc

