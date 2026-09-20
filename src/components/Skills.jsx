import React from "react";
import {
  Code,
  Braces,
  Atom,
  Box,
  Database,
  GitBranchPlus,
  FileJson2,
  Sparkles,
  Brain,
  Globe,
  Server,
  ShieldCheck,
  Layers
} from "lucide-react";
import { motion as Motion } from "framer-motion";

export default function Skills() {
  const skills = {
    "Front-End Development": {
      skills: [
        { name: "React.js", icon: <Atom size={32} />, color: "from-cyan-400 to-cyan-600" },
        { name: "Next.js", icon: <Braces size={32} />, color: "from-gray-400 to-gray-600" },
        { name: "HTML5", icon: <Code size={32} />, color: "from-orange-400 to-orange-600" },
        { name: "CSS3", icon: <FileJson2 size={32} />, color: "from-blue-400 to-cyan-500" },
        { name: "Tailwind CSS", icon: <Sparkles size={32} />, color: "from-cyan-400 to-blue-500" },
        { name: "Bootstrap", icon: <Box size={32} />, color: "from-purple-400 to-purple-600" },
      ],
      icon: <Globe size={24} />,
      color: "from-cyan-500 to-blue-500"
    },

    "Backend & APIs": {
      skills: [
        { name: "Node.js", icon: <Server size={32} />, color: "from-green-400 to-green-600" },
        { name: "Express.js", icon: <Globe size={32} />, color: "from-gray-400 to-gray-600" },
        { name: "REST APIs", icon: <Code size={32} />, color: "from-orange-400 to-orange-600" },
        { name: "Socket.IO", icon: <Sparkles size={32} />, color: "from-purple-400 to-purple-600" },
        { name: "Axios", icon: <Braces size={32} />, color: "from-blue-400 to-blue-600" },
        { name: "Postman", icon: <Box size={32} />, color: "from-orange-400 to-red-500" },
      ],
      icon: <Server size={24} />,
      color: "from-emerald-500 to-teal-500"
    },

    Databases: {
      skills: [
        { name: "MongoDB", icon: <Database size={32} />, color: "from-green-500 to-green-700" },
        { name: "MySQL", icon: <Database size={32} />, color: "from-blue-500 to-blue-700" },
        { name: "PostgreSQL", icon: <Database size={32} />, color: "from-indigo-400 to-blue-600" },
        { name: "SQLite", icon: <Database size={32} />, color: "from-cyan-400 to-blue-600" },
      ],
      icon: <Database size={24} />,
      color: "from-blue-500 to-cyan-500"
    },

    "Authentication & Security": {
      skills: [
        { name: "JWT", icon: <ShieldCheck size={32} />, color: "from-yellow-400 to-orange-500" },
        { name: "Cookies", icon: <ShieldCheck size={32} />, color: "from-orange-400 to-red-500" },
        { name: "Sessions", icon: <ShieldCheck size={32} />, color: "from-blue-400 to-indigo-500" },
        { name: "Role-Based Access Control (RBAC)", icon: <ShieldCheck size={32} />, color: "from-purple-400 to-purple-600" },
      ],
      icon: <ShieldCheck size={24} />,
      color: "from-amber-500 to-orange-500"
    },

    "Programming Languages & Computer Science": {
      skills: [
        { name: "JavaScript", icon: <Braces size={32} />, color: "from-yellow-300 to-orange-400" },
        { name: "TypeScript", icon: <Braces size={32} />, color: "from-blue-400 to-blue-600" },
        { name: "Python", icon: <Code size={32} />, color: "from-yellow-400 to-yellow-600" },
        { name: "Data Structures & Algorithms", icon: <Code size={32} />, color: "from-purple-400 to-indigo-500" },
        { name: "OOP", icon: <Box size={32} />, color: "from-pink-400 to-purple-500" },
        { name: "Design Patterns", icon: <Sparkles size={32} />, color: "from-cyan-400 to-teal-500" },
      ],
      icon: <Code size={24} />,
      color: "from-purple-500 to-indigo-500"
    },

    "UI, State & Visualization": {
      skills: [
        { name: "Material UI (MUI)", icon: <Layers size={32} />, color: "from-blue-400 to-blue-600" },
        { name: "Chakra UI", icon: <Layers size={32} />, color: "from-teal-400 to-cyan-600" },
        { name: "Redux", icon: <Atom size={32} />, color: "from-purple-400 to-purple-600" },
        { name: "Redux Toolkit", icon: <Atom size={32} />, color: "from-indigo-400 to-purple-600" },
        { name: "Zustand", icon: <Atom size={32} />, color: "from-orange-400 to-red-500" },
        { name: "Framer Motion", icon: <Sparkles size={32} />, color: "from-pink-400 to-purple-600" },
        { name: "GSAP", icon: <Sparkles size={32} />, color: "from-green-400 to-emerald-600" },
        { name: "Recharts", icon: <FileJson2 size={32} />, color: "from-cyan-400 to-blue-600" },
        { name: "D3.js", icon: <FileJson2 size={32} />, color: "from-orange-400 to-red-500" },
      ],
      icon: <Layers size={24} />,
      color: "from-violet-500 to-purple-500"
    },

    "AI, Machine Learning & Data Science": {
      skills: [
        { name: "Data Science", icon: <FileJson2 size={32} />, color: "from-purple-400 to-purple-600" },
        { name: "Machine Learning", icon: <Brain size={32} />, color: "from-indigo-400 to-indigo-600" },
        { name: "Deep Learning", icon: <Brain size={32} />, color: "from-violet-400 to-violet-600" },
        { name: "Natural Language Processing (NLP)", icon: <Brain size={32} />, color: "from-pink-400 to-pink-600" },
      ],
      icon: <Brain size={24} />,
      color: "from-cyan-500 to-blue-500"
    },

    Tools: {
      skills: [
        { name: "Git", icon: <GitBranchPlus size={32} />, color: "from-orange-400 to-orange-600" },
        { name: "Docker", icon: <Box size={32} />, color: "from-blue-400 to-blue-600" },
      ],
      icon: <Box size={24} />,
      color: "from-slate-400 to-slate-600"
    },
  };

  return (
    <section id="skills" className="py-16 relative bg-[#111111] overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <Motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >        
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A modern toolkit for building scalable, production-ready web applications.
          </p>
        </Motion.div>

        {/* Enhanced Skills Categories */}
        <div className="space-y-10">
          {Object.entries(skills).map(([category, categoryData], categoryIndex) => (
            <Motion.div
              key={category} 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${categoryData.color} bg-clip-text text-transparent mb-4`}>
                  <div className={`p-3 bg-gradient-to-r ${categoryData.color} rounded-full`}>
                    <div className="text-white">
                      {categoryData.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {category}
                  </h3>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {categoryData.skills.map((skill, skillIndex) => (
                  <Motion.div
                    key={skillIndex}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      type: "spring",
                      stiffness: 100 
                    }}
                    whileHover={{ y: -8, scale: 1.05 }}
                  >
                    {/* Glowing Border Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-0 group-hover:opacity-75 transition-all duration-500`}></div>
                    
                    {/* Main Card */}
                    <div className="relative bg-[#111111] border border-white/10 rounded-2xl p-4 backdrop-blur-sm h-full flex flex-col items-center text-center">
                      {/* Icon */}
                      <div className={`text-white mb-4 p-3 bg-gradient-to-r ${skill.color} rounded-xl`}>
                        {skill.icon}
                      </div>
                      
                      {/* Skill Name */}
                      <h4 className="text-white font-semibold mb-3 text-sm leading-tight">
                        {skill.name}
                      </h4>
                    </div>
                  </Motion.div>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
