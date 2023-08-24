
"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { activeLinks, activeLinks2 } from '@/constant'
import { usePathname } from 'next/navigation'
const SlideBar = () => {
    const pathname = usePathname()
  return (
    <div className='w-[200px] hidden lg:block lg:w-[300px] h-screen bg-black text-white fixed left-0 rounded-r'>
        <div className='flex flex-col justify-center items-center gap-5'>
            <Link href="/">
                <h3 className='text-4xl md:text-6xl font-bold text-yellow-400 p-5'>𝖡𝖮𝖱𝖠𝖦Ó</h3>
            </Link>
            <div className='flex flex-col gap-5 justify-center items-center'>
                <div className='text-4xl lg:w-[300px] text-center font-semibold border-b-4 border-yellow-400 font-serif'>
                    Food
                </div>
                <div className='flex flex-col gap-2'>
                {activeLinks.map((el) =>(
                    <Link key={el.name} href={el.link} className={`hover:text-yellow-400 ${pathname === el.link? `text-yellow-400` : ``}`}>
                        <div className='flex flex-row gap-2'>
                        <div>
                            <img src={el.icon} />
                        </div>
                        <h2 className='font-semibold'>
                            {el.name}
                        </h2>
                        </div>
                    </Link>
                ))}
                </div>
                <div className='text-4xl lg:w-[300px] text-center font-semibold border-b-4 border-yellow-400 font-serif'>
                    Drinks
                </div>
                <div className='flex flex-col gap-2'>
                {activeLinks2.map((el) =>(
                    <Link key={el.name} href={el.link} className={`hover:text-yellow-400 ${pathname === el.link? `text-yellow-400` : ``}`}>
                        <div className='flex flex-row gap-2'>
                        <div>
                            <img src={el.icon} />
                        </div>
                        <h2 className='font-semibold'>
                            {el.name}
                        </h2>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
        </div>
        <div className='absolute bottom-4 left-4'>
        <div className='flex flex-row gap-3'>
            <Link href="https://www.facebook.com/borago.restaurante/" target='_black' className='w-fit p-1 bg-slate-300 rounded-full hover:bg-yellow-400 transition-all duration-200'>
                <img src='/facebook (3).png' />
            </Link>
            <Link href="https://www.instagram.com/boragoscl/" target='_black' className='w-[40px] p-1 bg-slate-300 rounded-full hover:bg-yellow-400 transition-all duration-200'>
                <img src='/instagram (4).png' />
            </Link>
            <Link href="https://twitter.com/boragocl" target='_black' className='w-fit p-1 bg-slate-300 rounded-full hover:bg-yellow-400 transition-all duration-200'>
                <img src='/twitter.png' />
            </Link>
        </div>
        </div>
        <div className='absolute bottom-4 right-4'>
            <div className='flex flex-row gap-2'>
            <Link href="/contact" className='w-fit p-1 bg-slate-300 rounded-full hover:bg-yellow-400 transition-all duration-200' title='Contact'>
                <img src='/support.png' />
            </Link>
            <Link href="/about" className='w-fit p-1 bg-slate-300 rounded-full hover:bg-yellow-400 transition-all duration-200' title='about us'>
                <img src='/info.png' />
            </Link>
            </div>
        </div>
    </div>
  )
}

export default SlideBar