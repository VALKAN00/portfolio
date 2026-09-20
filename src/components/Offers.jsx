import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Offers() {
  const offer = {
    image:
      "https://blog.zegocloud.com/wp-content/uploads/2024/03/types-of-web-development-services.jpg",
    title: "Full-Stack Web Development",
    description:
      "Building modern, responsive, and scalable web applications from frontend to backend. I develop intuitive user interfaces with React.js, Next.js, and TypeScript, and build robust backend systems with Node.js, Express.js, REST APIs, and databases. I also integrate authentication, real-time communication, payment systems, and AI-powered features to create complete, production ready applications.",
    techStack:
      "React.js • Next.js • TypeScript • Node.js • Express.js • MongoDB • SQL",
  };

  return (
    <section id="offers" className="py-16 relative bg-[#111111]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">
          <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            What I Offer
          </span>
        </h2>

        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative group px-3 pb-3">
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/40 via-transparent to-cyan-500/40 rounded-[2.5rem_0.75rem_2.5rem_0.75rem] blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <div className="absolute -bottom-1 -right-1 w-28 h-28 border-r-2 border-b-2 border-cyan-400/60 rounded-br-[2rem]"></div>
            <div className="relative overflow-hidden rounded-[2.5rem_0.75rem_2.5rem_0.75rem] border border-white/15 shadow-2xl">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full aspect-[4/3] object-cover group-hover:scale-[1.04] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#111111]/50 via-transparent to-cyan-400/10"></div>
              <span className="absolute top-5 left-5 px-3 py-1.5 bg-[#111111]/80 border border-white/15 rounded-full text-xs font-semibold tracking-wider text-cyan-300 backdrop-blur-sm">
                FULL STACK
              </span>
            </div>
          </div>

          <div className="text-left border-l border-white/15 pl-6 lg:pl-10">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 font-semibold mb-4">
              What I build
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                {offer.title}
              </span>
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
              {offer.description}
            </p>
            <p className="border-t border-white/10 pt-5 text-cyan-400 text-sm md:text-base font-semibold mb-3">
              {offer.techStack}
            </p>
            <p className="text-purple-400 text-sm md:text-base font-semibold mb-8">
              AI Enhanced: Machine Learning • Deep Learning • NLP
            </p>
            <a
              href="#contact"
              className="border-b-2 border-purple-400 pb-2 text-gray-200 font-bold hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-2"
            >
              Get In Touch <ArrowDown size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
