import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm, ValidationError } from '@formspree/react';
import { BadgeCheck } from "lucide-react";
import { Package } from "lucide-react";

import { 
  Github, 
  Mail, 
  Linkedin, 
  ChevronDown, 
  ExternalLink,
  Code,
  Server,
  Cloud,
  Database,
  Terminal,
  Globe,
  Sun,
  Moon,
  FileDown
} from 'lucide-react';

function Section({ children, id, className = '' }: { children: React.ReactNode; id: string; className?: string }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [state, handleSubmit] = useForm("your-form-id"); // Replace with your Formspree form ID

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }

      setIsHeaderVisible(scrollY.get() > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: 'Frontend Development', icon: <Code size={24} /> },
    { name: 'Backend Development', icon: <Server size={24} /> },
    { name: 'Cloud Services', icon: <Cloud size={24} /> },
    { name: 'Database Design', icon: <Database size={24} /> },
    { name: 'DevOps', icon: <Terminal size={24} /> },
    { name: 'API Development', icon: <Globe size={24} /> },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sticky Header */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isHeaderVisible
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm transform translate-y-0'
            : 'transform -translate-y-full'
        }`}
      >
        <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <ul className="flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-primary-600 dark:text-primary-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="text-gray-300 hover:text-gray-100" />
            ) : (
              <Moon className="text-gray-600 hover:text-gray-800" />
            )}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <Section id="home" className="bg-section-blue dark:bg-gray-900">
        <div className="min-h-screen flex flex-col items-center justify-center relative px-4">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Arun Belavadi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Full Stack Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-6 justify-center mb-12"
            >
              <a
                href="https://github.com/arunxworkz"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:arunbelavadi30@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="Arun_Belavadi_Resume.pdf"
                download
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FileDown size={24} />
              </a>
            </motion.div>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 animate-bounce"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={32} className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-section-lavender dark:bg-gray-800">
        <div className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            A highly motivated and enthusiastic fresher with a solid foundation in Core Java, front-end web technologies, and MySQL. 
            Skilled in building responsive and dynamic web applications, with a keen interest in solving complex problems through clean and efficient code. Strong communication, 
            organizational, and professional writing skills complement my technical expertise, making me a well-rounded candidate ready to contribute effectively in a collaborative environment.
            </p>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-gray-900">
  <div className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-10">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Frontend Technologies */}
        <div className="bg-gray-800 text-white rounded-xl p-6 flex items-center space-x-4 shadow hover:shadow-lg transition-all duration-300">
          <Code className="text-sky-400 w-6 h-6" />
          <span className="font-semibold">Frontend Technologies</span>
        </div>

        {/* Backend Development */}
        <div className="bg-gray-800 text-white rounded-xl p-6 flex items-center space-x-4 shadow hover:shadow-lg transition-all duration-300">
          <Server className="text-sky-400 w-6 h-6" />
          <span className="font-semibold">Backend Development</span>
        </div>

        {/* Core Java & JDBC */}
        <div className="bg-gray-800 text-white rounded-xl p-6 flex items-center space-x-4 shadow hover:shadow-lg transition-all duration-300">
          <BadgeCheck className="text-sky-400 w-6 h-6" />
          <span className="font-semibold">Core Java & JDBC</span>
        </div>

        {/* Spring Framework */}
        <div className="bg-gray-800 text-white rounded-xl p-6 flex items-center space-x-4 shadow hover:shadow-lg transition-all duration-300">
          <BadgeCheck className="text-sky-400 w-6 h-6" />
          <span className="font-semibold">Spring Framework</span>
        </div>

        {/* Python */}
        <div className="bg-gray-800 text-white rounded-xl p-6 flex items-center space-x-4 shadow hover:shadow-lg transition-all duration-300">
          <BadgeCheck className="text-sky-400 w-6 h-6" />
          <span className="font-semibold">Python</span>
        </div>

        {/* Database & Version Control */}
        <div className="bg-gray-800 text-white rounded-xl p-6 flex items-center space-x-4 shadow hover:shadow-lg transition-all duration-300">
          <Database className="text-sky-400 w-6 h-6" />
          <span className="font-semibold">Database & Version Control</span>
        </div>

        {/*JPA*/}
        <div className="bg-gray-800 text-white rounded-xl p-6 flex items-center space-x-4 shadow hover:shadow-lg transition-all duration-300">
          <Database className="text-sky-400 w-6 h-6" />
          <span className="font-semibold">JPA (Java Persistence API)</span>
        </div>

        {/* For Maven */}
        <div className="bg-gray-800 text-white rounded-xl p-6 flex items-center space-x-4 shadow hover:shadow-lg transition-all duration-300">
          <Package className="text-sky-400 w-6 h-6" />
          <span className="font-semibold">Maven</span>
        </div>

      </div>
    </div>
  </div>
</Section>


      {/* Projects Section */}
      <Section id="projects" className="bg-section-peach dark:bg-gray-800">
        <div className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Projects</h2>
            <div className="grid gap-8">
              {[
                {
                  title: 'Gym Website',
                  description: 'A full-stack gym website built using Spring and JPA',
                  link: 'https://github.com/arunxworkz/Xworkz_Common_Module/tree/main/Arun_Gym',
                  image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fHww',
                },
                {
                  title: 'Common Module Project',
                  description: 'A shared library module designed to streamline reusable components and logic across multiple applications',
                  link: 'https://github.com/arunxworkz/Xworkz_Common_Module/tree/main/Xworkz_Commou_Module_Arun1',
                  image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-48"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <a
                        href={project.link}
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" className="bg-section-gray dark:bg-gray-900">
        <div className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Education</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Bachelor of Science in Computer Engineering
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Adhicunchanagirir Institute of Technology</p>
              <p className="text-gray-500 dark:text-gray-400">2020 - 2024</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-white dark:bg-gray-800">
        <div className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Get In Touch
            </h2>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
             📞 Phone: <a href="tel:+91 7483079907" className="text-primary-600 hover:underline">+91 7483079907</a>
            </p>
            <div className="max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 transform hover:-translate-y-1 transition-transform duration-200"
                >
                  Send Message
                </button>
              </form>
              {state.succeeded && (
                <p className="mt-4 text-green-600 dark:text-green-400 text-center">
                  Thanks for your message!
                </p>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Arun Belavadi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;