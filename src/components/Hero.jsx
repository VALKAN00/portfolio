import React from "react";
import { Github, Linkedin } from "lucide-react";
import TypeEffect from "./TypeEffect";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-[#111111] pt-30"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-4xl">
        {/* Enhanced Profile Image */}
        <div className="relative inline-block mb-8">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 rounded-full blur-lg opacity-40 animate-pulse"></div>
          
          {/* Profile Image */}
          <motion.img
            src="https://www.dropbox.com/scl/fi/n3lnf961zk4enn3mxtplx/photo3.jpg?rlkey=9mouwdjb0uk4jijiasqvhpnpt&st=3ocqu113&raw=1"
            alt="Abdelrhman Ahmed"
            className="relative w-48 h-48 rounded-full mx-auto border-4 border-white/20 shadow-2xl shadow-purple-500/30 hover:border-purple-400/50 transition-all duration-500"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
          />
        </div>

        {/* Enhanced Main Heading */}
        <motion.div
          className="mb-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-8xl font-extrabold mb-1 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Abdelrhman
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-300">
            Ahmed
          </h2>
        </motion.div>

        {/* Enhanced Subheading with typewriter effect */}
        <motion.div
          className="mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-xl md:text-3xl font-medium min-h-[60px] md:min-h-[80px] flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <span className="text-gray-300">I'm a</span>
            <span className="text-purple-400 font-bold min-w-[200px] text-center">
              <TypeEffect />
            </span>
          </div>
        </motion.div>

        {/* Enhanced Social Media Links */}
        <motion.div
          className="flex justify-center space-x-8 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.a
            target="_blank"
            href="https://github.com/VALKAN00"
            className="group relative p-4 bg-white/5 rounded-full border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
            <div className="absolute inset-0 rounded-full bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
          </motion.a>
          <motion.a
            target="_blank"
            href="https://www.linkedin.com/in/abdelrhman-ahmed-a19216296/"
            className="group relative p-4 bg-white/5 rounded-full border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
          </motion.a>
        </motion.div>

        {/* Enhanced Call to Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-full overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 inline-block"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.a>
          
          <motion.a
            href="#contact"
            className="group px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 inline-block"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
