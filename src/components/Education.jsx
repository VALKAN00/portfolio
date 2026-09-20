import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-9 md:py-10 relative bg-[#111111]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-7xl font-extrabold mb-5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Education
          </span>
        </motion.h2>

        <div className="w-40 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-20 md:mb-24 rounded-full"></div>

        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] items-center gap-10 lg:gap-12">
            {/* Education Info */}
            <motion.div
              className="min-w-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.15] max-w-3xl mb-8">
                Bachelor of Computers and Data Science
              </h3>
              <p className="text-2xl sm:text-3xl text-purple-400 font-semibold">
                Alexandria University
              </p>
              <div className="flex items-center gap-3 sm:gap-5 text-lg sm:text-xl mt-2">
                <span className="text-gray-300 font-medium">2026</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-300">GPA:</span>
                <span className="text-cyan-400 font-bold text-xl">3.62</span>
              </div>

              {/* Subject Tags */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-7">
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300">
                  Computer Science
                </span>
                <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30 hover:bg-cyan-500/30 transition-all duration-300">
                  Data Science
                </span>
                <span className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30 hover:bg-emerald-500/30 transition-all duration-300">
                  Graduated
                </span>
              </div>
            </motion.div>

            {/* University Logo */}
            <motion.div
              className="flex justify-center lg:justify-self-center order-last lg:order-none"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative group">
                {/* Animated glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500 animate-pulse"></div>

                {/* Logo container */}
                <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border border-slate-600 flex items-center justify-center p-5 sm:p-6 lg:p-7 group-hover:scale-105 transition-all duration-500 shadow-2xl">
                  <motion.img
                    src="Alexandria University.svg"
                    alt="Alexandria University Logo"
                    className="w-full h-full object-contain"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
