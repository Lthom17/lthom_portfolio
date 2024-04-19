import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "../SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import nextConfig from '../../../../next.config.mjs'

const projects = [
  {
    name: "Bookworm Client",
    description:
      "Bookworm serves as the Frontend UI of the Bookworm application. Built using React, this application facilitates users in digitally exploring and studying various books.",
    image: "/books.jpg",
    github: "https://github.com/Lthom17/BookWormClient/tree/master",

  },
  {
    name: "Bookworm Service",
    description: "This service serves as a Backend to the Bookworm application. It is built with Java and SpringBoot. It connects to the openLibrary api to serve up requests for data.",
    image: "/Library.jpg",
    github: "https://github.com/Lthom17/BookWormServer",

  },
  {
    name: "Bookworm Database",
    description:
      "This repository contains the code for the database container for the Bookworm application.",
    image: "/storage.jpg",
    github: "https://github.com/Lthom17/BookWormDatabase",
    },
  
   {
    name: "Field Agent Application Assessment",
    description:
      "This assessment takes the beginning code of a secret field agent tracking application and has the student make updates to the application.  This repository contains my code for updating the Backend service (Java) and Frontend UI (React).",
    image: "/spy.jpg",
    github: "https://github.com/Lthom17/week-9-assessment",
    },
   {
    name: "E-commerce A/B Test ",
    description:
      "The purpose of this project is to assist an e-commerce business in understanding the results of an A/B test run different versions of their landing page. The data analysis is done using Python, Jupiter Notebooks, and the MatPlotLib, Pandas, and Numpy libraries",
    image: "/ecommerce.jpg",
    github: "https://github.com/Lthom17/analyze_ab_test",
  },
]

const ProjectsSection = () => {

  const { basePath } = nextConfig;

  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={`${project.github}`}>
                      <Image
                        src={`${basePath}` + project.image }
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={`${project.github}`} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={`${project.github}`} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection