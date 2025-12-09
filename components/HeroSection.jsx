"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AviProfile from "./AviProfile";
import { Card } from "./ui/card"

const HeroSection = () => {
  return (
    <>

    <section className="p-16 relative min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('/images/nebula_bg.jpeg')]">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <div className="relative z-10 mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#BF7632] to-[#EA42A2]">
              Building AI-Driven Systems
            </span>
            <br />
            <span className="text-white">for a Smarter Future</span>
          </h1>

          <p className="text-[#d1d5db] text-lg sm:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Turning ideas into intelligent solutions! Building scalable AI systems 
            that empower innovation and enhance user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#BF7632] hover:bg-[#BF7632] text-white font-medium transition-all duration-300 text-center"
            >
              Let&apos;s Connect
            </Link>
            <Link
              href="https://drive.google.com/file/d/11BpXgrwHsr1fxP6GAi7FSk1XeiCez4X9/view?usp=sharing"
              className="px-6 py-3 rounded-full bg-white/10 border border-[#BF7632] hover:bg-white/20 text-white font-medium transition-all duration-300 text-center"
            >
              Download CV
            </Link>
          </div>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <AviProfile />
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
