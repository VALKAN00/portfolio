
export default function About() {
    return (
<section id="about" className="py-16 relative bg-[#111111] overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400/5 rounded-full blur-lg animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 max-w-7xl mx-auto">
          
          {/* Image Section */}
          <div className="lg:w-2/5">
            <div className="relative group">
              {/* Multiple glow layers */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-700"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
              
              {/* Image container */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2 rounded-xl">
                <img 
                  src="/photo.jpg" 
                  alt="Abdelrahman" 
                  className="rounded-lg shadow-2xl w-full relative transform group-hover:scale-105 transition-transform duration-500" 
                />
                
                {/* Floating skill badges */}
                <div className="absolute -top-4 -right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Data Scientist
                </div>
                <div className="absolute -bottom-4 -left-4 bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Full-Stack Dev
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="lg:w-3/5">
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Full Stack 
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Web Developer</span>
              </h3>
              
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  I'm a 
                  <span className="text-purple-400 font-semibold"> Full Stack Web Developer</span> specializing in building modern, scalable, and user focused web applications from frontend to backend.
                </p>
                
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  My primary focus is on 
                  <span className="text-cyan-400 font-semibold"> React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB and SQL</span>, with experience building RESTful APIs, secure authentication systems, real-time applications, dashboards, payment integrations, and responsive user interfaces.
                </p>
                
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  I enjoy turning ideas into complete products from designing intuitive interfaces and managing application state to building robust backend architectures, databases, and APIs behind them.
                </p>
                
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  I've worked on a variety of full stack applications, including a 
                  <span className="text-purple-400 font-medium"> production system currently used by the Faculty of Science at Alexandria University</span>, as well as platforms for college management, event management, and streaming experiences.
                </p>

                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  What makes my background different is my experience beyond traditional web development. With a strong foundation in 
                  <span className="text-cyan-400 font-semibold"> Machine Learning, Deep Learning, and NLP</span>, along with multiple projects and certifications in these areas, I can integrate AI powered features directly into modern web applications.
                </p>

                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  From intelligent recommendations and chatbots to text summarization and NLP based systems, I enjoy combining 
                  <span className="text-purple-400 font-semibold"> web development and AI</span> to build applications that are not only functional and scalable, but also smarter and more engaging.
                </p>
              </div>
              
              {/* Stats section */}
              <div className="grid grid-cols-3 gap-6 my-8 py-6">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-purple-400 group-hover:scale-110 transition-transform">20+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-cyan-400 group-hover:scale-110 transition-transform">3.62</div>
                  <div className="text-sm text-gray-400">CGPA</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-purple-400 group-hover:scale-110 transition-transform">1+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}