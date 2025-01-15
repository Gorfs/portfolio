import React from 'react';
import { Sun, Moon, Github, Mail, MapPin, Download, Languages, Linkedin } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';
import { content } from './content';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = content[language];

  return (
    <div className={`min-h-screen transition-colors duration-200 flex flex-col font-mono ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <nav className="fixed w-full p-6 backdrop-blur-sm bg-opacity-80">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <div className="flex gap-4">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle Language"
            >
              <Languages className="w-5 h-5" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto pt-24 px-6 flex-grow">
        <section className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="w-64 h-64 rounded-full overflow-hidden">
          {/*  Main photo */}
            <img
              src="./mainPicture.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">{t.name}</h2>
            <p className="text-xl mb-4">{t.role}</p>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <MapPin className="w-5 h-5" />
              <span>Paris, France</span>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Download className="w-5 h-5" />
                {t.downloadCV}
              </a>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h3 className="text-2xl font-bold mb-6">{t.education.title}</h3>
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-white dark:bg-gray-800">
              <h4 className="font-bold">{t.education.university}</h4>
              <p className="text-gray-600 dark:text-gray-400">{t.education.degree}</p>
              <p className="text-gray-600 dark:text-gray-400">{t.education.year}</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h3 className="text-2xl font-bold mb-6">{t.projects.title}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {t.projects.list.map((project, index) => (
              <div key={index} className="p-6 rounded-lg bg-white dark:bg-gray-800">
                <h4 className="font-bold mb-2">{project.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <Github className="w-5 h-5" />
                  {t.viewOnGithub}
                </a>
              </div>
            ))}
          </div>
        </section>
        <div><h2>Known Languages</h2>
        <p>Java, Python, C</p></div>

      </main>

      <footer className="mt-auto py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {t.name}. {t.footer.rights}
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
              >
                <Mail className="w-5 h-5" />
              </a>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {t.footer.madeWith}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;