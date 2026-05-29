const skillCategories = [
  {
    title: "Backend & Frameworks",
    icon: "⚙️",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring AI",
      "REST APIs",
      "Microservices",
      "Hibernate/JPA",
    ],
  },
  {
    title: "AI & ML",
    icon: "🧠",
    skills: [
      "LangChain",
      "CrewAI",
      "RAG Pipelines",
      "Vector Databases",
      "LLM Integration",
      "MCP (Model Context Protocol)",
      "Spring AI",
      "Agentic AI",
    ],
  },
  {
    title: "Databases & Storage",
    icon: "🗄️",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
    ],
  },
  {
    title: "Security & Auth",
    icon: "🔐",
    skills: [
      "SSO",
      "OAuth2",
      "RBAC",
      "JWT",
      "Spring Security",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      "Docker",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    skills: [
      "Git",
      "Maven",
      "Kafka",
      "RabbitMQ",
      "Swagger/OpenAPI",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-card-bg/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-accent mb-8 glow">
          <span className="text-text-secondary">## </span>skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="border border-border rounded-lg p-5 hover:border-accent/50 transition-colors card-glow"
            >
              <h3 className="text-accent text-sm font-bold mb-3">
                {category.icon} {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 border border-border text-text-secondary rounded hover:border-accent/50 hover:text-accent transition-colors"
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
