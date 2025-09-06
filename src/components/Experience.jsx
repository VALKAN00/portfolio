import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Natural Language Processing (NLP) Summer Training",
      company: "National Telecommunication Institute (NTI)",
      location: "Online, Egypt",
      period: "Jul 2025 – Aug 2025",
      description: [
        "Completed 120 hours of training with a final score of 95.5%.",
        "Gained hands-on experience in text preprocessing, similarity, classification, semantic analysis, speech-based applications, RAG, and fine-tuning LLMs.",
        "Applied NLP techniques through multiple real-world projects.",
      ],
      tags: ["NLP", "LLMs", "Text Processing", "Classification", "RAG"],
      current: false,
    },
    {
      title: "Data Science Intern",
      company: "Digital Egypt Pioneers Initiative (DEPI) – IBM",
      location: "Alexandria, Egypt",
      period: "Oct 2024 – May 2025",
      description: [
        "Completed IBM's Data Science Professional Certificate.",
        "Applied data science methodologies across real-world projects.",
        "Gained experience in Python, SQL, data analysis, visualization, machine learning, and MLOps.",
      ],
      tags: ["Python", "SQL", "Machine Learning", "Data Analysis", "MLOps"],
      current: false,
    },
    {
      title: "Front-End Development Training",
      company: "Faculty of Computers and Data Science",
      location: "Alexandria, Egypt",
      period: "Jul 2024 – Aug 2024",
      description: [
        "Trained in modern front-end technologies: HTML, CSS, Bootstrap, JavaScript, and ReactJS.",
      ],
      tags: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
      current: false,
    },
    {
      title: "Full-Stack Web Development Intern",
      company: "ITSquare",
      location: "Alexandria, Egypt",
      period: "Jan 2024 – Feb 2024",
      description: [
        "Participated in the development and maintenance of web applications.",
        "Gained hands-on experience with full-stack technologies such as React, Flask, and MongoDB.",
      ],
      tags: ["React", "Flask", "MongoDB", "Full-Stack"],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-16 relative bg-[#111111]">
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
            Experience
          </span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-slate-900 z-10 shadow-lg">
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-ping"></div>
                  )}
                </div>

                {/* Experience card */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  } group`}
                >
                  <div className="relative">
                    {/* Decorative glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                    {/* Card content */}
                    <div className="relative bg-[#111111] border-1 border-slate-600 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 shadow-xl">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-purple-400 font-semibold mb-1">
                          {exp.company}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-400">
                          <span>{exp.location}</span>
                          <span className="flex items-center gap-1">
                            {exp.current && (
                              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            )}
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-300 text-sm flex items-start"
                          >
                            <span className="text-purple-400 mr-2 mt-1.5 w-1 h-1 bg-purple-400 rounded-full flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs font-medium border border-slate-600 hover:bg-slate-600 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
