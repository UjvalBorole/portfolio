import React from "react";
import { Link } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Project from "./project/project";
import Block from "./Block/block";
import { DownloadCloud } from "lucide-react";
import Resume from "../Resume/UjvalBoroleResumes.pdf";
import Hero from "../source/hero1.png";
import Hero2 from "../source/hero2.png";
import Experience from "./Experience/experience";

export default function Home() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl">
        {/* HERO SECTION */}
        <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
          {/* Image comes first on mobile, text on right for desktop */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            
            {/* HERO IMAGE (Left on Desktop, Top on Mobile) */}
            <div className="flex justify-center md:justify-start w-full md:w-1/2 relative z-0 md:static md:ml-8">
              <img
                className="w-[280px] sm:w-[380px] md:w-[460px] lg:w-[540px] h-auto object-contain drop-shadow-2xl mt-4 md:mt-0"
                src={Hero}
                alt="Hero Image"
              />
            </div>

            {/* TEXT SECTION (Right on Desktop, Below Image on Mobile) */}
            <div className="w-full md:w-1/2 relative z-10 px-6 md:px-0 text-center md:text-right space-y-6 mt-8 md:mt-0">
              <h2 className="text-4xl font-bold sm:text-5xl leading-tight">
                <span className="font-semibold text-3xl">Hello, I am</span>
                <br />
                Ujval Borole
                <br />
                <span className="sm:block text-3xl">Software Engineer</span>
              </h2>

              <Link
                className="inline-flex text-white items-center px-4 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                onClick={() => window.open(Resume)}
              >
                <DownloadCloud className="mr-2" />
                Download CV
              </Link>
            </div>
          </div>
        </aside>

        {/* SECOND HERO IMAGE (Share Your Suggestions) */}
        <div className="grid place-items-center sm:mt-10 mt-8">
          <img
            className="w-[300px] sm:w-[420px] md:w-[500px] lg:w-[580px] h-auto object-contain drop-shadow-md transition-transform duration-500 hover:scale-105"
            src={Hero2}
            alt="Suggestions Section Image"
          />
        </div>

        {/* HEADING */}
        <h1 className="text-center text-2xl sm:text-5xl py-8 font-semibold text-gray-900">
          Share Your Suggestions...
        </h1>
      </div>

      {/* OTHER SECTIONS */}
      <About />
      <Experience />
      <Project showAll={false} />
      <Block />
      <Contact />
    </>
  );
}
