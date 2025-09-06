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
  Server
} from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = {
    "Programming Languages & Core CS": {
      skills: [
        { name: "Python", icon: <Code size={32} />, color: "from-yellow-400 to-yellow-600" },
        { name: "JavaScript", icon: <Braces size={32} />, color: "from-yellow-300 to-orange-400" },
        { name: "Java", icon: <Code size={32} />, color: "from-red-400 to-red-600" },
        { name: "C++", icon: <Code size={32} />, color: "from-blue-400 to-blue-600" },
        { name: "R", icon: <Code size={32} />, color: "from-blue-300 to-blue-500" },
        { name: "SQL", icon: <Database size={32} />, color: "from-green-400 to-green-600" },
        { name: "HTML", icon: <Code size={32} />, color: "from-orange-400 to-orange-600" },
        { name: "CSS", icon: <FileJson2 size={32} />, color: "from-blue-400 to-cyan-500" },
      ],
      icon: <Code size={24} />,
      color: "from-purple-500 to-indigo-500"
    },

    "Machine Learning & Data Science": {
      skills: [
        { name: "Data Science", icon: <Brain size={32} />, color: "from-purple-400 to-purple-600" },
        { name: "Machine Learning", icon: <Brain size={32} />, color: "from-indigo-400 to-indigo-600" },
        { name: "Deep Learning", icon: <Brain size={32} />, color: "from-violet-400 to-violet-600" },
        { name: "NLP", icon: <FileJson2 size={32} />, color: "from-pink-400 to-pink-600" },
        { name: "Data Analysis", icon: <FileJson2 size={32} />, color: "from-cyan-400 to-cyan-600" },
        { name: "Data Visualization", icon: <FileJson2 size={32} />, color: "from-teal-400 to-teal-600" },
        { name: "Excel", icon: <FileJson2 size={32} />, color: "from-green-400 to-green-600" },
        { name: "Power BI", icon: <FileJson2 size={32} />, color: "from-yellow-400 to-yellow-600" },
        { name: "Tableau", icon: <FileJson2 size={32} />, color: "from-blue-400 to-blue-600" },
      ],
      icon: <Brain size={24} />,
      color: "from-cyan-500 to-blue-500"
    },

    "Web Dev & DevOps": {
      skills: [
        { name: "React", icon: <Atom size={32} />, color: "from-cyan-400 to-cyan-600" },
        { name: "Next.js", icon: <Braces size={32} />, color: "from-gray-400 to-gray-600" },
        { name: "Flask", icon: <Globe size={32} />, color: "from-green-400 to-green-600" },
        { name: "Git", icon: <GitBranchPlus size={32} />, color: "from-orange-400 to-orange-600" },
        { name: "Docker", icon: <Box size={32} />, color: "from-blue-400 to-blue-600" },
        { name: "MySQL", icon: <Database size={32} />, color: "from-blue-500 to-blue-700" },
        { name: "MongoDB", icon: <Database size={32} />, color: "from-green-500 to-green-700" },
        { name: "SQL Server", icon: <Server size={32} />, color: "from-red-500 to-red-700" },
      ],
      icon: <Globe size={24} />,
      color: "from-emerald-500 to-teal-500"
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
        <motion.div 
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
            A comprehensive toolkit of technologies and skills I use to bring ideas to life
          </p>
        </motion.div>

        {/* Enhanced Skills Categories */}
        <div className="space-y-16">
          {Object.entries(skills).map(([category, categoryData], categoryIndex) => (
            <motion.div 
              key={category} 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {categoryData.skills.map((skill, skillIndex) => (
                  <motion.div
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
                    <div className="relative bg-[#111111] border border-white/10 rounded-2xl p-6 backdrop-blur-sm h-full flex flex-col items-center text-center">
                      {/* Icon */}
                      <div className={`text-white mb-4 p-3 bg-gradient-to-r ${skill.color} rounded-xl`}>
                        {skill.icon}
                      </div>
                      
                      {/* Skill Name */}
                      <h4 className="text-white font-semibold mb-3 text-sm leading-tight">
                        {skill.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
