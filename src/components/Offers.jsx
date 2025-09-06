import React from "react";
import { motion } from "framer-motion";
import { Code2, DatabaseZap, BrainCircuit, ArrowDown } from "lucide-react";

export default function Offers() {
  const offers = [
    {
      image:
        "https://blog.zegocloud.com/wp-content/uploads/2024/03/types-of-web-development-services.jpg",
      title: "Web Development",
      description:
        "Designing and developing responsive, high-performance websites and web applications using modern tech stacks. I combine web technologies with insights from Machine Learning and Data Science to build intelligent, dynamic user experiences that deliver real value.",
    },
    {
      image:
        "https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/11/what-is-data-science-1024x640.jpg",
      title: "Data Science",
      description:
        "Extracting valuable insights from complex datasets through data preprocessing, exploratory and statistical analysis, interactive visualization, and machine learning model development. I build, train, and evaluate models to uncover patterns, predict outcomes, and support smarter, data-driven decisions that help optimize business operations.",
    },
    {
      image:
        "https://iticollege.edu/wp-content/uploads/2024/07/Machine-Learning-Basics.jpg",
      title: "Machine Learning",
      description:
        "Building intelligent systems that learn from data to solve real-world problems. From recommendation engines and prediction models to natural language processing and deep learning applications, I develop solutions that are accurate, scalable, interpretable, and ready for real-world deployment.",
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className="p-0.5 rounded-lg relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* The glowing border effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>

              {/* The main card content */}
              <div className="bg-[#111111] border-1 border-slate-600 backdrop-blur-sm rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300 h-full relative flex flex-col p-8 text-center items-center">
                {/* image rendering */}
                {offer.image ? (
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-60 mb-4 rounded-2xl object-cover"
                  />
                ) : (
                  offer.icon
                )}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {offer.title}
                </h3>
                <p className="text-gray-400 mb-8 text-sm flex-grow">
                  {offer.description}
                </p>
                <a
                  href="#contact"
                  className="mt-auto bg-transparent border-2 border-slate-600 text-gray-300 font-bold py-3 px-8 rounded-full hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300 inline-flex items-center gap-2"
                >
                  Get In Touch <ArrowDown size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
