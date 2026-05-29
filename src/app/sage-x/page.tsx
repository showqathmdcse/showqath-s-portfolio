/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const features = [
  {
    title: "Multi-Cloud AI",
    description: "Switch between Azure OpenAI, Amazon Bedrock, and GCP Vertex AI with a single command. One tool, every cloud.",
  },
  {
    title: "Smart Model Selection",
    description: "Choose from Claude Opus, Sonnet, Haiku, or Amazon Nova models. Switch models on the fly without restarting.",
  },
  {
    title: "Intelligent Code Understanding",
    description: "Reads your codebase, understands configuration files, explores project structure, and provides context-aware answers.",
  },
  {
    title: "Safe Execution",
    description: "Run bash commands with safety controls. Read-only operations execute automatically, while write operations require approval.",
  },
  {
    title: "Conversation Memory",
    description: "Save and load conversations. Pick up where you left off. Track token usage across sessions.",
  },
  {
    title: "Provider Switching",
    description: "Seamlessly switch between cloud providers and models mid-conversation using simple slash commands.",
  },
];
export default function SageXPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-[#e8eaed]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="text-[#202124] hover:text-[#1a73e8] transition-colors text-sm font-medium">
            ← Back to Portfolio
          </Link>
        </div>
      </nav>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold text-[#1a73e8] uppercase tracking-wider bg-[#e8f0fe] px-3 py-1 rounded-full">
            Personal Innovation Project
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#202124] mt-6 mb-6 tracking-tight">
            Sage-X
          </h1>
          <p className="text-xl md:text-2xl text-[#5f6368] max-w-2xl mx-auto leading-relaxed">
            Wisdom meets code. Your AI-powered coding assistant that works with any cloud.
          </p>
        </div>
      </section>
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-[#e8eaed] shadow-lg">
            <img
              src={`/showqath-s-portfolio/images/sage-x-1.png`}
              alt="Sage-X Welcome Screen"
              className="w-full"
            />
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#202124] mb-4 text-center">
            Code smarter, not harder
          </h2>
          <p className="text-[#5f6368] text-lg text-center max-w-2xl mx-auto mb-16">
            Sage-X understands your entire project. Ask it about your database connections,
            explore configurations, or let it navigate complex codebases — all from your terminal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden border border-[#e8eaed] shadow-sm hover:shadow-md transition-shadow">
              <img
                src={`/showqath-s-portfolio/images/sage-x-6.png`}
                alt="Sage-X exploring codebase"
                className="w-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#e8eaed] shadow-sm hover:shadow-md transition-shadow">
              <img
                src={`/showqath-s-portfolio/images/sage-x-5.png`}
                alt="Sage-X creating files and editing code"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#202124] mb-4 text-center">
            Every cloud. Every model. One command.
          </h2>
          <p className="text-[#5f6368] text-lg text-center max-w-2xl mx-auto mb-12">
            Switch providers and models instantly. No restarts. No reconfiguration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden border border-[#e8eaed] shadow-sm hover:shadow-md transition-shadow">
              <img
                src={`/showqath-s-portfolio/images/sage-x-4.png`}
                alt="Sage-X model selection"
                className="w-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#e8eaed] shadow-sm hover:shadow-md transition-shadow">
              <img
                src={`/showqath-s-portfolio/images/sage-x-2.png`}
                alt="Sage-X provider switching"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#202124] mb-4 text-center">
            Write code with AI that understands context
          </h2>
          <p className="text-[#5f6368] text-lg text-center max-w-2xl mx-auto mb-12">
            Sage-X doesn&apos;t just answer questions — it reads your project, creates files, edits code, and shows you diffs before applying changes.
          </p>
          <div className="rounded-2xl overflow-hidden border border-[#e8eaed] shadow-lg">
            <img
              src={`/showqath-s-portfolio/images/sage-x-3.png`}
              alt="Sage-X editing code with diffs"
              className="w-full"
            />
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#202124] mb-12 text-center">
            Built for developers who ship fast
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 border border-[#e8eaed]">
                <h3 className="text-base font-bold text-[#202124] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#5f6368] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-[#f8f9fa]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#202124] mb-4">
            Built with passion. Open for collaboration.
          </h2>
          <p className="text-[#5f6368] mb-8">
            Sage-X is my personal innovation project — built while working on
            enterprise AI platforms at Ascendion. It&apos;s what happens when you give
            a developer the freedom to solve their own problems.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#1a73e8] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#1557b0] transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
