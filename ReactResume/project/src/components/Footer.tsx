import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">© 2025 Arun Belavadi. All rights reserved.</p>
        
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/arunxworkz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            <Github size={28} />
          </a>
          
          <a
            href="#"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}