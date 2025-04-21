interface Project {
  title: string;
  description: string;
  image: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Gym Website",
      description: "A role-based Gym Management System built with Java, Spring Boot, JPA, Maven, HTML, and CSS — enabling seamless user registration, workout tracking, and admin control.",
      image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg"
    },
    {
      title: "Common Modules",
      description: "A centralized module offering account locking, authentication, file uploads, and other reusable features for seamless integration across the website.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    },
    {
      title: "IOT Based Smart Irrigation System",
      description: "An IoT-based Smart Irrigation System integrated with a Dual Axis Solar Tracker to optimize water usage and maximize solar energy efficiency for sustainable farming.",
      image: "https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg"
    }
  ];

  return (
    <section className="py-16 px-4">
      <h2 className="text-5xl font-bold text-white mb-12 text-center">Projects</h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white/5 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}