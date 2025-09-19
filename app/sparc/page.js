import Image from 'next/image'
import React from 'react'
import { IconsRow } from '../components/IconsRow'


function page() {
    return (
        <section className='mt-24 flex justify-center items-center pb-8 gap-7 flex-col bg-[var(--white-color)] pt-6'>
            <div className='grid grid-cols-2 justify-center overflow-hidden'>
                <div className="flex justify-center items-center">
                    <Image
                        className='w-auto h-45'
                        src='/image/logo.png'
                        width={1000}
                        height={1000}
                        alt='logo'
                    />
                </div>
                <div className='flex flex-col justify-center items-end text-right  text-[var(--sec-main-color)]'>
                    <h2 className=' font-[800] text-[5rem]'>
                        <span>OFFICIALLY</span>
                    </h2>
                    <h2 className=' font-[800] text-[5rem]'>
                        <span>OPEN !</span>
                    </h2>
                    <p className='font-[400] text-[2rem] text-[var(--text-color)]'>let the challenge begin !</p>
                </div>
            </div>
            <div>
                <button
                    className={`bg-[var(--main-color)] text-[var(--white-color)] px-8 py-2 rounded-lg font-semibold text-lg hover:bg-[var(--bg-color)]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl `}
                >
                    register now !
                </button>
            </div>
            <div className=' '>
               
                <IconsRow/>
            </div>

        </section>
    )
}

export default page

