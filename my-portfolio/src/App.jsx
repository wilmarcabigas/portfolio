import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import assets from './assets/grad.jpg'

function App() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = (id) => {
    setNavOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-slate-800 to-blue-900 px-4 pt-28">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center backdrop-blur-md bg-gray-900/80 shadow-lg">
        <nav className="w-full max-w-5xl flex justify-between items-center px-4 sm:px-8 py-4 rounded-b-xl">
          {/* Logo or Brand */}
          <div className="flex items-center space-x-3">
            <img src={reactLogo} alt="Logo" className="w-10 h-10" />
            <span className="text-white text-2xl sm:text-3xl font-extrabold tracking-wide">Wilmar<span className="text-blue-400">Dev</span></span>
          </div>
          {/* Hamburger */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`block h-0.5 w-6 bg-white mb-1 transition-all ${navOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white mb-1 transition-all ${navOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all ${navOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
          {/* Navigation Links */}
          <ul className={`flex-col sm:flex-row sm:flex space-y-4 sm:space-y-0 sm:space-x-8 absolute sm:static top-16 left-0 w-full sm:w-auto bg-gray-900/95 sm:bg-transparent px-6 sm:px-0 py-4 sm:py-0 rounded-b-xl shadow-lg sm:shadow-none transition-all duration-200 z-40 ${navOpen ? 'flex' : 'hidden'}`}>
            <li>
              <a
                href="#home"
                onClick={e => { e.preventDefault(); handleNavClick('home'); }}
                className="block text-blue-400 bg-white/10 shadow px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-200 border border-blue-400 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={e => { e.preventDefault(); handleNavClick('skills'); }}
                className="block text-slate-200 hover:text-blue-400 transition-colors text-lg font-medium px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                TechStack
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); handleNavClick('contact'); }}
                className="block text-slate-200 hover:text-blue-400 transition-colors text-lg font-medium px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
   

      {/* Home Section */}
      <section className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-16 mb-6 w-full mt-16">
        <div className="flex-shrink-0 w-60 h-60 sm:w-80 sm:h-80 bg-white/10 rounded-full flex items-center justify-center overflow-hidden shadow-lg border-4 border-white/20">
          <img
            src={assets}
            className="w-full h-full object-cover"
            alt="Profile"
          />
        </div>
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <span className="text-white text-5xl font-extrabold drop-shadow-lg">Wilmar Cabigas</span>
          <p className="text-slate-200 mt-6 text-xl max-w-md">
            Dedicated Front-End Developer eager to craft visually appealing and highly functional web applications.
          </p>
          {/* Social Icons and Contact Button */}
          <div className="flex items-center space-x-6 mt-8">
            {/* Social Icons */}
            <a href="https://github.com/wilmarcabigas" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg className="w-8 h-8 text-white hover:text-slate-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/wilmar-cabigas-045859367/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="w-8 h-8 text-white hover:text-slate-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
              </svg>
            </a>
            {/* Contact Button */}
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-colors">
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full max-w-4xl bg-gray-900 bg-opacity-80 rounded-xl shadow-lg p-8 mt-15">
        <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
        <p className="text-slate-200 text-lg">
          Hello! I'm Wilmar Cabigas, a passionate Front-End Developer with a love for building beautiful and functional web applications. I enjoy working with modern technologies like React and Tailwind CSS to deliver seamless user experiences. Let's create something amazing together!
        </p>
      </section>
      {/* Skills Section */}
<section id="skills" className="w-full max-w-4xl bg-gray-900 bg-opacity-80 rounded-xl shadow-lg p-8 mt-10">
  <h2 className="text-3xl font-bold text-white mb-6">Tech Stack</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {/* Example Skill */}
    <div className="flex flex-col items-center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="Laravel" className="w-12 h-12 mb-2" />
      <span className="text-white font-semibold">Laravel</span>
    </div>
    <div className="flex flex-col items-center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" className="w-12 h-12 mb-2" />
      <span className="text-white font-semibold">Vite</span>
    </div>
    <div className="flex flex-col items-center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="w-12 h-12 mb-2" />
      <span className="text-white font-semibold">Java</span>
    </div>
    <div className="flex flex-col items-center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" className="w-12 h-12 mb-2" />
      <span className="text-white font-semibold">PHP</span>
    </div>
    <div className="flex flex-col items-center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JavaScript" className="w-12 h-12 mb-2" />
      <span className="text-white font-semibold">JavaScript</span>
    </div>
    <div className="flex flex-col items-center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-12 h-12 mb-2" />
      <span className="text-white font-semibold">Tailwind CSS</span>
    </div>
    <div className="flex flex-col items-center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12 mb-2" />
      <span className="text-white font-semibold">React</span>
    </div>
    {/* Add more skills as needed */}
  </div>
</section>
{/* Contact Section */}
<section id="contact" className="w-full max-w-4xl bg-gray-900 bg-opacity-80 rounded-xl shadow-lg p-8 mt-10 mb-10">
  <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>
  <form
    action="https://formspree.io/f/xrbqwqgr" // Replace with your Formspree form ID or use mailto as fallback
    method="POST"
    className="flex flex-col space-y-4"
  >
    <input
      type="text"
      name="name"
      required
      placeholder="Your Name"
      className="px-4 py-2 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="email"
      name="email"
      required
      placeholder="Your Email"
      className="px-4 py-2 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <textarea
      name="message"
      required
      placeholder="Your Message"
      rows={5}
      className="px-4 py-2 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-colors"
    >
      Send Message
    </button>
  </form>
  <p className="text-slate-400 mt-4 text-center">
    Or email me directly at{" "}
    <a
      href="mailto:wilmarcabigas@gmail.com"
      className="text-blue-400 underline hover:text-blue-300"
    >
      wilmarcabigas@gmail.com
    </a>
  </p>
</section>
    </div>
  )
}

export default App