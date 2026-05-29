const experiences = [
  {
    role: "Backend Developer",
    company: "Ascendion",
    period: "Jun 2024 - Present",
    description: [
      "Building AAVA-AGENTIC PLATFORM — an enterprise agentic AI platform with autonomous agents, guardrails, knowledge bases, MCP integrations, tools, and workflows",
      "Developed microservices architecture with Spring Boot featuring service discovery, API gateway, circuit breakers, and distributed tracing",
      "Implemented SSO and RBAC security framework with OAuth2, JWT, and Spring Security for fine-grained access control",
      "Built RAG pipelines using Spring AI and LangChain with vector databases for enterprise knowledge management",
      "Designed event-driven architectures with Kafka for real-time data processing and inter-service communication",
      "Innovated AAVA Code — a multi-cloud AI coding assistant CLI supporting Azure OpenAI, AWS Bedrock, and GCP Vertex AI",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-card-bg/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-accent mb-8 glow">
          <span className="text-text-secondary">## </span>experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="border border-border rounded-lg p-5 hover:border-accent/50 transition-colors card-glow relative"
            >
              {i < experiences.length - 1 && (
                <div className="absolute left-8 top-full w-px h-6 bg-border"></div>
              )}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <div>
                  <h3 className="text-accent text-sm font-bold">{exp.role}</h3>
                  <p className="text-text-secondary text-xs">{exp.company}</p>
                </div>
                <span className="text-text-secondary text-xs border border-border px-2 py-0.5 rounded mt-2 md:mt-0 w-fit">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-1.5">
                {exp.description.map((item, j) => (
                  <li key={j} className="text-text-secondary text-xs flex">
                    <span className="text-accent mr-2 shrink-0">$</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
