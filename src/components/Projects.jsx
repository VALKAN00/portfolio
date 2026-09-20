import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { MyProjects } from "./Data/Projects_Data";
import { motion } from "framer-motion";
export default function Projects() {
  const projectOrder = {
    "Web Projects": [
      "Academia",
      "User Management System - Alexandria University",
      "POPCORN - Streaming Platform",
      "EventX Studio",
      "Unishop",
    ],
    "Data Science | Machine Learning": [
      "Mental Health Support Assistant",
      "Movie Recommendation System",
      "Mental Health Classification",
      "Heart Disease and Diabetes Analysis and Prediction",
      "Airline Passenger Satisfaction",
      "Data analysis for imdb top 2000 movies",
    ],
  };

  const projectGroups = [
    {
      title: "Web Projects",
      projects: MyProjects.filter((project) => project.category === "Web Projects").sort(
        (firstProject, secondProject) =>
          projectOrder["Web Projects"].indexOf(firstProject.title) -
          projectOrder["Web Projects"].indexOf(secondProject.title)
      ),
    },
    {
      title: "Data Science | Machine Learning",
      projects: MyProjects.filter(
        (project) => project.category === "Data Science | Machine Learning"
      ).sort(
        (firstProject, secondProject) =>
          projectOrder["Data Science | Machine Learning"].indexOf(firstProject.title) -
          projectOrder["Data Science | Machine Learning"].indexOf(secondProject.title)
      ),
    },
  ];

  return (
    <section id="projects" className="relative bg-[#111111]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>

        {projectGroups.map((group) => (
          <div key={group.title} className="mb-16 last:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              {group.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {group.projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#111111] border-1 border-slate-600 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 group h-full flex flex-col"
              // 3. Add animation properties
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }} // Better mobile detection
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered delay
            >
              <div className="relative overflow-hidden">
                {project.projectType && (
                  <span
                    className={`absolute right-4 top-4 z-10 rounded-full border px-3 py-1 text-xs font-semibold shadow-lg backdrop-blur-sm ${
                      project.projectType === "Freelance"
                        ? "border-green-300/60 bg-green-950/85 text-green-300"
                        : "border-cyan-300/60 bg-[#111111]/85 text-cyan-300"
                    }`}
                  >
                    {project.projectType}
                  </span>
                )}
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-56 md:h-64 flex items-center justify-center bg-gradient-to-br from-purple-950 via-[#111111] to-cyan-950 px-6">
                    <span className="text-center text-lg font-semibold text-gray-300">
                      Project image coming soon
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow h-full">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm flex-grow">
                  {project.description}
                </p>

                {/* Tags for technologies used */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-900/50 text-purple-300 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links to GitHub and Live Demo */}
                <div className="flex justify-between gap-3 mt-auto">
                  {project.showGithub !== false && (
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.github || undefined}
                    aria-disabled={!project.github}
                    onClick={(event) => {
                      if (!project.github) event.preventDefault();
                    }}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 border border-gray-600 hover:border-purple-500 group"
                  >
                    <Github
                      size={16}
                      className="group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.showLive !== false && (
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.live || undefined}
                    aria-disabled={!project.live}
                    onClick={(event) => {
                      if (!project.live) event.preventDefault();
                    }}
                    className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 border border-purple-600 hover:border-purple-400 group shadow-lg hover:shadow-purple-500/25"
                  >
                    <ExternalLink
                      size={16}
                      className="group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
