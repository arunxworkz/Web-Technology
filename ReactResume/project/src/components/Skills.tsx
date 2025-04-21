import { Code2, Database, FileJson, FileType, FileType2, Phone as Python } from 'lucide-react';

export default function Skills() {
  const skills = [
    { icon: <Code2 size={64} />, name: 'Core Java' },
    { icon: <Database size={64} />, name: 'MySQL' },
    { icon: <FileJson size={64} />, name: 'Spring' },
    { icon: <FileType size={64} />, name: 'JPA' },
    { icon: <FileType2 size={64} />, name: 'HTML' },
    { icon: <Python size={64} />, name: 'Python' }
  ];

  return (
    <section className="py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-8">Skills</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="flex flex-col items-center p-6 text-white hover:shadow-[0_0_50px_0_rgba(255,255,255,0.3)] 
              transition-all duration-300 rounded-lg cursor-pointer"
          >
            <div className="mb-4 text-white">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}