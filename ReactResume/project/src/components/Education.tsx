import { FileDown } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-5xl font-bold text-white mb-12 text-center">Education</h2>
      
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-800 to-blue-500 rounded-lg p-8 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Adhichunchanagiri Institute of Technology</h3>
        <p className="text-2xl mb-2">Bachelor of Engineering</p>
        <p className="text-xl mb-2">Branch: Computer Science</p>
        <p className="mb-8">Year Graduated: 2020-2024</p>
        
        <a 
          href="images/Arun_Belavadi_Resume.pdf" 
          download
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 
            transition-all duration-300 rounded-lg px-6 py-3"
        >
          <FileDown className="animate-bounce" />
          <span>Download Resume</span>
        </a>
      </div>
    </section>
  );
}