export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-section-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Get in touch
        </h2>
        <p className="text-text-secondary text-base mb-8 max-w-lg">
          I&apos;m always open to discussing new projects, collaboration
          opportunities, or just talking tech. Feel free to reach out.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="mailto:mshowqath@gmail.com"
            className="border border-border rounded-xl p-5 bg-white flex items-center gap-4 hover-lift hover-accent group"
          >
            <span className="text-xl">✉️</span>
            <div>
              <p className="text-xs text-text-secondary font-medium">Email</p>
              <p className="text-sm text-text-primary font-medium group-hover:text-accent transition-colors">
                mshowqath@gmail.com
              </p>
            </div>
          </a>
          <a
            href="https://github.com/showqathmdcse"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border rounded-xl p-5 bg-white flex items-center gap-4 hover-lift hover-accent group"
          >
            <span className="text-xl">🐙</span>
            <div>
              <p className="text-xs text-text-secondary font-medium">GitHub</p>
              <p className="text-sm text-text-primary font-medium group-hover:text-accent transition-colors">
                showqathmdcse
              </p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/n-mohamed-showqath-460252228/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border rounded-xl p-5 bg-white flex items-center gap-4 hover-lift hover-accent group"
          >
            <span className="text-xl">💼</span>
            <div>
              <p className="text-xs text-text-secondary font-medium">LinkedIn</p>
              <p className="text-sm text-text-primary font-medium group-hover:text-accent transition-colors">
                n-mohamed-showqath
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
