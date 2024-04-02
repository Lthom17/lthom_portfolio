
"use client"
import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'
import { IoMdMenu, IoMdClose } from 'react-icons/io'

interface NavItems {
    label: string
    page: string
}


const NAV_ITEMS: Array<NavItems> = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Projects', page: 'projects' }]

export default function Navbar() {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    const [navbar, setNavbar] = useState()
    
    return (
        <header className='w-full mx-auto px-4 shadow fixed top-0 z-50 dark:border-stone-600'>
            <div className='justify-between md:items-center md:flex'>
                <div>
                    <div className='md:py-5 md:block'>
                        <h2 className='text-2xl font-bold'>Lauren Thom</h2>
                    </div>
                </div>
                <div className='items-center justify-center md:flex md:space-x-6'>
                    {NAV_ITEMS.map((item, idx) => {
                        return <a key={idx}>{item.label}</a>
                    })}
                    {currentTheme === 'dark' ? (
                        <button
                            onClick={() => setTheme('light')}
                            className='bg-slate-100 p-2 rounded-xl'>
                            <RiSunLine size={25} color='black' />
                        </button> 
                    ) : (
                            <button
                                onClick={() => setTheme('dark')}
                                className='bg-slate-100 p2 rounded-xl'>
                                <RiMoonFill size={25} />
                            </button>
                    )}
                </div>
           </div>

        </header>
       
   ) 
}