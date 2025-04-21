interface Skill {
  title: string;
  description: string;
}

export default function TechnicalSummary() {
  const skills: Skill[] = [
    {
      title: "CORE JAVA",
      description: "Skilled in Core Java development, with expertise in object-oriented programming, exception handling, collections, Java 8+ features (lambdas, streams), file I/O, and performance optimization for scalable, efficient applications."
    },
    {
      title: "JDBC",
      description: "Hands on experience in JDBC for database connectivity, including executing SQL queries, managing connections, and handling transactions. Experienced in integrating Java applications with relational databases, optimizing performance, and ensuring data consistency and security"
    },
    {
      title: "JPA",
      description: "Hands on experience in Java Persistence API (JPA) for object-relational mapping, including entity management, query optimization, and transaction handling. Skilled in using Hibernate, and criteria API for efficient database interaction and persistence management."
    },
    {
      title: "SPRING",
      description: "Hands-on Spring Framework, including Spring Core, Spring MVC, for building scalable, maintainable applications. Experienced in dependency injection, and integrating with databases using Spring Data JPA."
    },
    {
      title: "MYSQL",
      description: "Hands on experience in MySQL database design, querying, and optimization. Experienced with SQL, data modeling, indexing, and managing relational databases for high-performance applications and data integrity."
    }
  ];

  return (
    <section className="py-16 px-4">
      <h2 className="text-5xl font-bold text-white mb-12 text-center">Technical Summary</h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="p-6 text-white rounded-lg hover:shadow-[0_0_50px_0_rgba(19,106,141,0.5)] 
              transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-lg leading-relaxed">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}