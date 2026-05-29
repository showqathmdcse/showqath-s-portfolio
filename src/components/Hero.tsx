"use client";

import TypingEffect from "./TypingEffect";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl w-full">
        <div className="border border-border rounded-lg bg-card-bg p-6 md:p-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="ml-4 text-text-secondary text-xs">
              terminal — showqath@dev
            </span>
          </div>
          <div className="space-y-3">
            <p className="text-text-secondary text-sm">
              <span className="text-accent">$</span> whoami
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-accent glow">
              <TypingEffect text="Mohamed Showqath N" speed={80} />
            </h1>
            <p className="text-text-secondary text-sm">
              <span className="text-accent">$</span> cat role.txt
            </p>
            <h2 className="text-xl md:text-2xl text-muted">
              Backend Developer & AI Engineer
            </h2>
            <p className="text-text-secondary text-sm mt-4">
              <span className="text-accent">$</span> cat summary.txt
            </p>
            <p className="text-text-secondary leading-relaxed max-w-2xl">
              Building enterprise-grade microservices, AI-powered applications,
              and cloud-native solutions. Specializing in Java Spring ecosystem,
              Agentic AI frameworks, and modern backend architectures.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="border border-accent text-accent px-6 py-2 hover:bg-accent hover:text-black transition-all text-sm"
              >
                {">"} view_projects
              </a>
              <a
                href="#contact"
                className="border border-border text-text-secondary px-6 py-2 hover:border-accent hover:text-accent transition-all text-sm"
              >
                {">"} contact_me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
