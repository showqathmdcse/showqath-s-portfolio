const skillCategories = [
  {
    title: "Backend & Frameworks",
    skills: ["Java", "Spring Boot", "Spring Security", "Spring AI", "REST APIs", "Microservices", "Hibernate/JPA"],
  },
  {
    title: "AI & ML",
    skills: ["LangChain", "CrewAI", "RAG Pipelines", "Vector Databases", "LLM Integration", "MCP", "Spring AI", "Agentic AI"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    title: "Security",
    skills: ["SSO", "OAuth2", "RBAC", "JWT", "Spring Security"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "CI/CD", "GitHub Actions"],
  },
  {
    title: "Tools",
    skills: ["Git", "Maven", "Kafka", "RabbitMQ", "Swagger/OpenAPI"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-section-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-text-primary mb-10">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white border border-border rounded-xl p-5 hover-lift hover-accent"
            >
              <h3 className="text-sm font-bold text-text-primary mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 bg-section-bg text-text-secondary rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
