"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* add effect of image appearing using motion at load time  */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-stone-200 mb-10 text-6xl md:text-8xl">
            <span className="font-gabriela tracking-wider leading-8 md:tracking-wide font-extrabold text-orange-600">
              Hi, I'm{" "}
            </span>
            {/* Job Title Animation */}
            <TypeAnimation
              className="font-caveatBrush tracking-wider inline-block"
              sequence={[
                "Karla",
                3500,
                "A Web Developer",
                3500,
                "A Database Designer",
                3500,
                "A Software Engineer",
                3500,
              ]}
              wrapper="span"
              speed={70}
              repeat={Infinity}
            />
          </h1>

          {/* header buttons */}

          <div>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-300 hover:bg-bgPrimaryBlue text-stone-200 mt-3">
              <a href="#contact" className="block hover:bg-orange-600 rounded-full px-5 py-2">
                Contact Me
              </a>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-600 via-orange-500 to-yellow-300 hover:bg-bgPrimaryBlue text-stone-200 mt-3">
              <a
                href="https://flowcv.com/resume/5rjvp5u3at"
                className="block bg-bgSecondaryBlue hover:bg-orange-600 rounded-full px-5 py-2"
                target="_blank"
              >
                Download CV
              </a>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-8 lg:mt-0"
        >
          <div className="rounded-full bg-[#0B2839] w-[275px] h-[275px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image-blue.jpeg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[225px] h-[225px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full object-center"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
