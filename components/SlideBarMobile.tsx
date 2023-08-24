"use client"
import { activeLinks, activeLinks2 } from '@/constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const SlideBarMobile = () => {
    const [show, setShow] = useState(false)
    const pathname = usePathname()
  return (
    <div className='w-screen h-[80px] md:h-[100px] bg-black lg:hidden fixed top-0 z-10'>
        <div className='flex flex-row justify-between items-center'>
        <Link href="/" className='flex justify-center items-center'>
            <h3 className='text-4xl md:text-6xl font-bold text-yellow-400 p-5'>𝖡𝖮𝖱𝖠𝖦Ó</h3>
        </Link>
        <div className="block px-4 py-3 mx-2 rounded group cursor-pointer w-fit" onClick={() => show === false ? setShow(true) : setShow(false)}>
                <div>
                    <img src='/menu.png' />
                </div>
                <div className={`absolute top-0  h-screen w-[300px] sm:w-[400px] rounded-r bg-black text-white border-r border-yellow-400 shadow-2xl ${show === true ? `left-0 opacity-100` : `-left-full opacity-0`} transition-all duration-300`}>
                    <div className='absolute top-2 right-2 cursor-pointer' onClick={() => setShow(false)}>
                        <img src='/close.png' />
                    </div>
                    <Link href="/">
                    <h3 className='text-4xl md:text-6xl font-bold text-yellow-400 p-5'>𝖡𝖮𝖱𝖠𝖦Ó</h3>
                    </Link>
                    <div className="flex flex-col w-full items-center cursor-pointer pt-10">
                    <div className='text-4xl w-full text-center font-semibold border-b-4 border-yellow-400 font-serif mb-5'>
                    Food
                    </div>
                <div className='flex flex-col gap-3'>
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
                <div className='text-4xl w-full text-center font-semibold border-b-4 border-yellow-400 font-serif mt-10 mb-5'>
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
            </div>
        </div>
    </div>
  )
}

export default SlideBarMobile