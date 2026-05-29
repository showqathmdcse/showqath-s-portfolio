export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-accent mb-8 glow">
          <span className="text-text-secondary">## </span>about_me
        </h2>
        <div className="border border-border rounded-lg bg-card-bg p-6 md:p-8">
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              <span className="text-accent">{">"}</span> I&apos;m a passionate
              Backend Developer with deep expertise in building scalable,
              production-grade systems. My focus spans from enterprise Java
              applications to cutting-edge AI integrations.
            </p>
            <p>
              <span className="text-accent">{">"}</span> I architect and build
              microservices using Spring Boot, implement secure authentication
              with SSO/RBAC, design RESTful APIs, and integrate AI capabilities
              using Spring AI, LangChain, and CrewAI. I also build developer
              tools like multi-cloud AI coding assistants.
            </p>
            <p>
              <span className="text-accent">{">"}</span> I work with LLM models,
              Vector Databases, RAG pipelines, and MCP (Model Context Protocol)
              to build intelligent, context-aware applications that solve real
              business problems.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs text-text-secondary">
              <span className="text-accent">location:</span> Available for
              remote & on-site roles &nbsp;|&nbsp;
              <span className="text-accent">status:</span> Open to
              opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
