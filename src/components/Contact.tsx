"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "mshowqath@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-accent mb-8 glow">
          <span className="text-text-secondary">## </span>contact
        </h2>
        <div className="border border-border rounded-lg bg-card-bg p-6 md:p-8">
          <div className="space-y-4">
            <p className="text-text-secondary text-sm">
              <span className="text-accent">$</span> echo
              &quot;Let&apos;s build something amazing together&quot;
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              I&apos;m always open to discussing new projects, collaboration
              opportunities, or just talking tech. Feel free to reach out!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <a
                href={`mailto:${email}`}
                className="border border-border rounded-lg p-4 hover:border-accent/50 transition-colors group"
              >
                <p className="text-accent text-xs mb-1">// email</p>
                <p className="text-text-secondary text-sm group-hover:text-accent transition-colors">
                  {email}
                </p>
              </a>
              <a
                href="https://github.com/showqathmdcse"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border rounded-lg p-4 hover:border-accent/50 transition-colors group"
              >
                <p className="text-accent text-xs mb-1">// github</p>
                <p className="text-text-secondary text-sm group-hover:text-accent transition-colors">
                  github.com/showqathmdcse
                </p>
              </a>
              <a
                href="https://www.linkedin.com/in/n-mohamed-showqath-460252228/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border rounded-lg p-4 hover:border-accent/50 transition-colors group"
              >
                <p className="text-accent text-xs mb-1">// linkedin</p>
                <p className="text-text-secondary text-sm group-hover:text-accent transition-colors">
                  linkedin.com/in/n-mohamed-showqath
                </p>
              </a>
              <button
                onClick={handleCopy}
                className="border border-border rounded-lg p-4 hover:border-accent/50 transition-colors group text-left"
              >
                <p className="text-accent text-xs mb-1">// copy email</p>
                <p className="text-text-secondary text-sm group-hover:text-accent transition-colors">
                  {copied ? "✓ copied to clipboard!" : "click to copy email"}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
