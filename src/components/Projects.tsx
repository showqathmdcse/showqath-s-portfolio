const projects = [
  {
    title: "AAVA-AGENTIC PLATFORM",
    description:
      "Enterprise agentic AI platform featuring autonomous agents, guardrails, knowledge bases, MCP integrations, tools, and workflows. Includes SSO/RBAC authentication, RAG-powered document Q&A, event-driven microservices architecture, and scalable API gateway with circuit breakers and distributed tracing.",
    tech: [
      "Spring Boot",
      "Spring AI",
      "LangChain",
      "CrewAI",
      "MCP",
      "RAG",
      "OAuth2",
      "Kafka",
      "Docker",
      "PostgreSQL",
    ],
    status: "production",
  },
  {
    title: "AAVA Code - Multi-Cloud AI Coding CLI",
    description:
      "Personal innovation project — a terminal-based AI coding assistant supporting Azure OpenAI, Amazon Bedrock, and GCP Vertex AI. Features file read/write/edit tools, bash execution with safety controls, conversation persistence, token tracking, and provider switching via slash commands.",
    tech: ["TypeScript", "Node.js", "Azure OpenAI", "AWS Bedrock", "GCP Vertex AI", "Commander"],
    status: "development",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-accent mb-8 glow">
          <span className="text-text-secondary">## </span>projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-border rounded-lg p-5 bg-card-bg hover:border-accent/50 transition-all card-glow group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-accent text-sm font-bold group-hover:glow transition-all">
                  {project.title}
                </h3>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded border ${
                    project.status === "production"
                      ? "border-green-800 text-green-400"
                      : "border-yellow-800 text-yellow-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-text-secondary text-xs leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-1.5 py-0.5 bg-accent/10 text-accent border border-accent/20 rounded"
                  >
                    {t}
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
