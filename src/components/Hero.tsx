export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="shrink-0 animate-slide-left hidden md:block">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-section-bg border border-border overflow-hidden flex items-center justify-center relative">
            <pre className="text-[10px] leading-tight text-text-secondary font-mono p-4 select-none">
{`@RestController
public class AgentAPI {

  @Autowired
  private AIService ai;

  @PostMapping("/query")
  public Response ask(
    @RequestBody Query q
  ) {
    return ai.process(q);
  }
}`}
            </pre>
            <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
          </div>
        </div>
        <div className="flex-1 animate-fade-in text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-3 tracking-tight leading-tight">
            Mohamed Showqath N
          </h1>
          <p className="text-accent font-semibold text-base mb-4">
            Backend Developer & AI Engineer
          </p>
          <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg">
            Building enterprise-grade microservices, AI-powered applications, and
            cloud-native solutions at Ascendion. Passionate about Agentic AI,
            RAG pipelines, and developer tooling.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="#projects"
              className="bg-accent text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors"
            >
              View Projects
            </a>
            <a
              href="mailto:mshowqath@gmail.com"
              className="border border-border text-text-primary px-6 py-2.5 rounded-lg text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Get in Touch
            </a>
          </div>
          <div className="flex justify-center md:justify-start gap-6 mt-8">
            <a
              href="https://github.com/showqathmdcse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors text-sm"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/n-mohamed-showqath-460252228/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors text-sm"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
