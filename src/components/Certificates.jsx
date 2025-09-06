import React from "react";
import { motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      title: "Data Science Professional Certificate",
      issuer: "Digital Egypt Pioneers Initiative (DEPI) – IBM",
      image: "/certificates/Depi Certificate.png",
      description:
        "Comprehensive data science program covering Python, SQL, machine learning, data analysis, and MLOps",
      tags: ["Data Science", "Machine Learning", "Python", "IBM"],
      date: "2025",
    },
    {
      title: "Natural Language Processing Certificate",
      issuer: "National Telecommunication Institute (NTI)",
      image: "/certificates/NTI NLP Certificate.jpg",
      description:
        "Advanced NLP training with 120 hours covering text processing, LLMs, RAG, and fine-tuning",
      tags: ["NLP", "LLMs", "AI", "Text Processing"],
      date: "2025",
      score: "95.5%",
    },
    {
      title: "NVIDIA Certificate",
      issuer: "NVIDIA",
      image: "/certificates/NVIDIA Certificate.png",
      description:
        "Professional certification in NVIDIA technologies and GPU computing",
      tags: ["NVIDIA", "GPU Computing", "AI"],
      date: "2024",
    },
  ];

  return (
    <section id="certificates" className="py-16 relative bg-[#111111]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Certificates
          </span>
        </motion.h2>
        <motion.p
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Professional certifications and achievements that validate my
          expertise in data science, machine learning, and AI technologies.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative">
                {/* Decorative glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                {/* Certificate card */}
                <div className="relative bg-[#111111] border-1 border-slate-600 rounded-xl overflow-hidden hover:border-purple-500 transition-all duration-300 shadow-xl">
                  {/* Certificate image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent opacity-60"></div>

                    {/* Score badge */}
                    {cert.score && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        {cert.score}
                      </div>
                    )}

                    {/* Date badge */}
                    <div className="absolute top-4 left-4 bg-slate-900/80 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      {cert.date}
                    </div>
                  </div>

                  {/* Certificate content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-purple-400 font-semibold mb-3">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {cert.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-xs font-medium border border-slate-600 hover:bg-purple-600/20 hover:border-purple-500 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View certificate button */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => window.open(cert.image, "_blank")}
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                    >
                      View Certificate
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
