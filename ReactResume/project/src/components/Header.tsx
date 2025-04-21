import { Menu } from 'lucide-react';

interface HeaderProps {
  name: string;
  profileImage: string;
}

export default function Header({ name, profileImage }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-800 to-purple-600 shadow-lg">
      <nav className="flex justify-between items-center h-20 px-6 text-white">
        <div className="flex items-center gap-6 text-2xl font-bold">
          <div className="relative group">
            <img 
              src={profileImage} 
              alt={name}
              className="w-12 h-12 rounded-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <span>{name}</span>
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <a 
                href="#home" 
                className="text-xl hover:text-cyan-200 transition-all duration-300 hover:text-2xl"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-xl hover:text-cyan-200 transition-all duration-300 hover:text-2xl"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </nav>
    </header>
  );
}