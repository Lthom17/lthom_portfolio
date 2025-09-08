 import React from "react"
import Image from "next/image"

const skills = [
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "WAVE" },
    { skill: "SQL" },
  { skill: "JavaScript" },
  { skill: "PHP" }, 
  { skill: "Java" },
  { skill: "SpringBoot" },
  { skill: "Git" },
  { skill: "GitHub" },

]

export default function AboutSection(){

  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Lauren and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in St.Paul, MN.
            </p>
            <br />
            <p>
              I graduated from Oakland University, Michigan in 2005
                          with a BS in Biology. After college I was able to gain technical skills 
                          through the Dev10 Java Software Engineer Boot Camp and a variety of online programs and self education. 
                          I am currently working as a contracted Fullstack Software Engineer for Best Buy.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
                          From reading, playing sports, traveling, to teaching online courses at a
                          local university,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and challenging yourself, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hi.png"
              alt="Female avatar with blond hair, wearing glasses"
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
