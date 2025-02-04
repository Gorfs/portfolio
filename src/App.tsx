import { Github, Mail, FileText, ExternalLink, GraduationCap, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-zinc-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="animate-float absolute rounded-full"
            style={{
              width: Math.random() * 300 + 50 + 'px',
              height: Math.random() * 300 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)',
              animation: `float ${Math.random() * 10 + 20}s linear infinite`,
              animationDelay: `-${Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 animate-fade-in">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 [text-shadow:_0_4px_12px_rgb(0_0_0_/_20%)]">Archie Beales</h1>
            <h2 className="text-xl md:text-2xl text-slate-300 mb-6">Computer Science Student</h2>
            <p className="text-lg mb-8">Université Paris Cité</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#contact" className="bg-slate-600 hover:bg-slate-700 px-6 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(148,163,184,0.5)] animate-pulse-shadow">
                Contact Me
              </a>
              <a href="#projects" className="border border-slate-600 hover:bg-slate-700/20 px-6 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(148,163,184,0.3)]">
                View Projects
              </a>
              <a 
                href="/ARCHIE_CV_FRENCH.pdf" 
                className="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 px-6 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(148,163,184,0.5)]"
              >
                <FileText className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative w-64 h-64 mx-auto">
              <img
                src="portrait.jpeg"
                alt="Profile"
                className="rounded-full w-full h-full object-cover border-4 border-slate-600 shadow-[0_0_30px_rgba(148,163,184,0.3)] transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Education Section */}
        <section id="education" className="mb-20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold mb-8 text-center [text-shadow:_0_4px_12px_rgb(0_0_0_/_20%)]">Education</h2>
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] transition-all duration-300">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Université Paris Cité</h3>
              </div>
              <p className="text-slate-300">Bachelor in Computer Science</p>
              <p className="text-slate-400">2022 - Present</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold mb-8 text-center [text-shadow:_0_4px_12px_rgb(0_0_0_/_20%)]">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Shell Program",
                description: "Unix shell written in C that includes many features such as concurent for loops, if statements, pipelines...",
                tech: ["C", "Project Management", "System calls"],
                link: "https://github.com/Gorfs/fshell"
              },
              {
                title: "Piece Out clone",
                description: "Java clone of the popular game Piece Out",
                tech: ["Java", "Gradle", "Design Patterns"],
                link:"https://github.com/Gorfs/PieceOut"
              },
              {
                title: "Sudoku Solver",
                description: "Backtracking sudoku solver written in Python",
                tech: ["Python", "Backtracking", "Algorithms"],
                link: "https://github.com/Gorfs/sudokuSolver"
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/10"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
              
              <a href={project.link}>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-slate-700/50 px-3 py-1 rounded-full text-sm hover:bg-slate-700/70 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-bold mb-8 text-center [text-shadow:_0_4px_12px_rgb(0_0_0_/_20%)]">Get In Touch</h2>
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a 
                href="mailto:archiebeales@gmail.com" 
                className="flex items-center gap-3 hover:bg-white/5 p-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(148,163,184,0.3)]"
              >
                <Mail className="w-6 h-6" />
                <span>archie.beales@gmail.com</span>
              </a>
              <a 
                href="https://github.com/Gorfs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 hover:bg-white/5 p-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(148,163,184,0.3)]"
              >
                <Github className="w-6 h-6" />
                <span>GitHub Profile</span>
              </a>
              <a 
                href="https://linkedin.com/in/archie-beales" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 hover:bg-white/5 p-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(148,163,184,0.3)]"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;