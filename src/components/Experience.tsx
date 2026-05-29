export default function Experience() {
  const items = [
    "Architected a distributed microservices platform using Spring Boot with service discovery, API gateway, circuit breakers, and distributed tracing ensuring high availability",
    "Implemented centralized SSO and RBAC security framework with OAuth2, JWT, and Spring Security enabling fine-grained access control across multiple microservices",
    "Built RAG pipelines using Spring AI and LangChain with vector databases, enabling intelligent document Q&A and enterprise knowledge retrieval",
    "Integrated agentic AI workflows using CrewAI and Model Context Protocol (MCP) for automated multi-step task orchestration and intelligent decision-making",
    "Designed event-driven architectures with Apache Kafka for real-time data processing, inter-service communication, and reliable message delivery",
    "Developed production-grade RESTful APIs following OpenAPI specifications consumed by multiple internal and external teams",
    "Innovated Sage-X — a multi-cloud AI coding assistant CLI supporting Azure OpenAI, Amazon Bedrock, and GCP Vertex AI",
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-section-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-text-primary mb-10">
          Experience
        </h2>
        <div className="border border-border rounded-xl bg-white p-8 hover-lift">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-text-primary">
                Backend Developer
              </h3>
              <p className="text-accent font-semibold mt-1">Ascendion</p>
            </div>
            <span className="text-text-secondary text-sm mt-2 md:mt-0 bg-section-bg px-3 py-1 rounded-full">
              Jun 2024 — Present
            </span>
          </div>
          <div className="bg-section-bg rounded-lg p-4 mb-6 border-l-4 border-accent">
            <p className="text-sm font-bold text-text-primary">
              AAVA-AGENTIC PLATFORM
            </p>
            <p className="text-sm text-text-secondary mt-1">
              Enterprise agentic AI platform with autonomous agents, guardrails,
              knowledge bases, MCP integrations, tools, and workflows serving
              enterprise clients.
            </p>
          </div>
          <ul className="space-y-4">
            {items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
