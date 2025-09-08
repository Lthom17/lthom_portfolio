"use client" // this is a client component
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { HiArrowDown } from "react-icons/hi"


const InformationSection = () => {
    return (
        <section id="Home">
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
                    <Image className="rounded-full shadow-2xl" src="/Portfolio_profile.jpg" alt="female with blond hair and blue eyes, smiling" width={300} height={300} />
                </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Lauren!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Full Stack Software Engineer{" "}
            </span>
                        based in St.Paul, Minnesota. I am interested in building software that solves big problems
                        and helps to enhance the lives of people!
          </p>
          <Link
            href="#projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          href="#about"
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}
      
export default InformationSection;