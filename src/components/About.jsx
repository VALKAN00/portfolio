
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
                  src="https://www.dropbox.com/scl/fi/n3lnf961zk4enn3mxtplx/photo3.jpg?rlkey=9mouwdjb0uk4jijiasqvhpnpt&st=3ocqu113&raw=1" 
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
                Where 
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> AI </span>
                Meets the 
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Web</span>
              </h3>
              
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  I am a dedicated and versatile professional with expertise in 
                  <span className="text-purple-400 font-semibold"> data science</span>, 
                  <span className="text-cyan-400 font-semibold"> machine learning</span> and 
                  <span className="text-purple-400 font-semibold"> web development</span>. 
                  With a strong foundation in both theoretical concepts and practical skills, I combine hands-on experience with modern technologies to develop innovative solutions.
                </p>
                
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  I've built intelligent solutions such as 
                  <span className="text-cyan-400 font-medium"> recommendation systems</span>, 
                  <span className="text-purple-400 font-medium"> market analysis</span> and 
                  <span className="text-cyan-400 font-medium"> forecasting tools</span>, 
                  <span className="text-purple-400 font-medium"> healthcare prediction applications</span>, and 
                  <span className="text-cyan-400 font-medium"> mental health analysis models</span>.
                </p>
                
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  But I don't stop at building the backend logic — I bring these systems to life by developing 
                  <span className="text-purple-400 font-medium"> user-friendly web applications</span> that allow users to interact with them seamlessly.
                </p>
                
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  My projects are designed to be 
                  <span className="text-cyan-400 font-medium"> intuitive</span>, 
                  <span className="text-purple-400 font-medium"> responsive</span>, and 
                  <span className="text-cyan-400 font-medium"> visually appealing</span>, 
                  ensuring a smooth and engaging user experience from start to finish.
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
                  <div className="text-3xl font-bold text-purple-400 group-hover:scale-110 transition-transform">2+</div>
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