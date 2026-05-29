import Link from "next/link";

const projects = [
  {
    title: "AAVA-AGENTIC PLATFORM",
    tag: "Ascendion",
    tagColor: "bg-blue-50 text-blue-700",
    description:
      "Enterprise agentic AI platform featuring autonomous agents, guardrails, knowledge bases, MCP integrations, tools, and workflows. Includes SSO/RBAC authentication, RAG-powered document Q&A, event-driven microservices architecture, and scalable API gateway with circuit breakers and distributed tracing.",
    tech: ["Spring Boot", "Spring AI", "LangChain", "CrewAI", "MCP", "RAG", "OAuth2", "Kafka", "Docker", "PostgreSQL"],
    link: "/aava-platform",
  },
  {
    title: "Sage-X — Multi-Cloud AI Coding CLI",
    tag: "Innovation",
    tagColor: "bg-green-50 text-green-700",
    description:
      "Wisdom meets code. Your AI-powered coding assistant that works with any cloud — supports Azure OpenAI, Amazon Bedrock, and GCP Vertex AI.",
    tech: ["TypeScript", "Node.js", "Azure OpenAI", "AWS Bedrock", "GCP Vertex AI", "Commander"],
    link: "/sage-x",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-text-primary mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="border border-border rounded-xl p-6 hover-lift hover-accent group"
            >
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${project.tagColor}`}>
                {project.tag}
              </span>
              <h3 className="text-lg font-bold text-text-primary mt-4 mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 bg-section-bg text-text-secondary rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.link && (
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-1 text-accent text-sm font-semibold hover:underline"
                >
                  Learn more →
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
