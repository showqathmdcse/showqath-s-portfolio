import Link from "next/link";

const modules = [
  {
    title: "Secure Access & Identity",
    description:
      "Single sign-on login with cloud providers and role-based permissions so only the right people access the right features.",
  },
  {
    title: "MCP Gateways",
    description:
      "A bridge that connects AI agents to external tools, APIs, and data sources — giving them the ability to take actions in the real world.",
  },
  {
    title: "Knowledge Pipeline",
    description:
      "Automatically pulls documents from GitHub, SharePoint, and cloud storage, keeps them in sync, and makes them searchable by AI using smart retrieval.",
  },
  {
    title: "Ask-AAVA",
    description:
      "An intelligent bot that understands what users are asking, finds the most relevant information from the knowledge base, and delivers accurate answers.",
  },
];

const overview = [
  "An enterprise AI platform where autonomous agents do work on behalf of users",
  "Agents have guardrails, tools, and workflows to complete complex tasks safely",
  "A knowledge base that stays in sync with your documents and makes them AI-searchable",
  "Secure login and permissions — every user sees only what they should",
  "Real-time communication between services so everything stays in sync",
  "Agents connect to external tools through a standard protocol (MCP)",
];

export default function AavaPlatformPage() {
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
            Ascendion · Official Project
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#202124] mt-6 mb-6 tracking-tight">
            AAVA-AGENTIC PLATFORM
          </h1>
          <p className="text-xl md:text-2xl text-[#5f6368] max-w-2xl mx-auto leading-relaxed">
            An enterprise platform where AI agents work alongside people —
            answering questions, automating workflows, and making knowledge
            accessible.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#202124] mb-6">What is it?</h2>
          <div className="bg-[#f8f9fa] rounded-2xl p-8 border border-[#e8eaed]">
            <ul className="space-y-4">
              {overview.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#5f6368] text-base leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-[#1a73e8] shrink-0 mt-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#202124] mb-3 text-center">
            What I Built
          </h2>
          <p className="text-[#5f6368] text-center mb-12 max-w-xl mx-auto">
            The key modules I own and developed within the platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((mod) => (
              <div
                key={mod.title}
                className="bg-white rounded-xl p-7 border border-[#e8eaed] hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-[#202124] mb-3">
                  {mod.title}
                </h3>
                <p className="text-[#5f6368] text-sm leading-relaxed">
                  {mod.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
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
