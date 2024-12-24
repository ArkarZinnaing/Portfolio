"use client"
import Image from 'next/image';
import Navbar2 from "./Navbar2"
import {useState } from "react"

export default function NavHeader(){
    const [navOpen, setNavOpen] = useState(false)
    return (
        <header className="fixed top-0 left-0 w-full h-20 flex item-center z-40 bg-gradient-to-b form-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    <a href="">
                        <Image src="../../../public/next.svg" width={40} height={40} alt="hello"/>
                    </a>
                </h1>
            </div>

            <div className="relative md:justify-selft-center">
                <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
                    <span className="material-symbols-rounded">
                        {navOpen ? 'close' : 'menu'}
                    </span>
                </button>

                <Navbar2 navOpen={navOpen} />
            </div>

            <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">Contact me</a>
        </header>
    )
}