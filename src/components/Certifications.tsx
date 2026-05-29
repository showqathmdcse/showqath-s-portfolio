const certifications = [
  {
    title: "Generative AI Level 301",
    issuer: "Cognixia",
    date: "Sep 2024",
  },
  {
    title: "Generative AI Level 201",
    issuer: "Cognixia",
    date: "Aug 2024",
  },
  {
    title: "Generative AI Level 101",
    issuer: "Cognixia",
    date: "Aug 2024",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-accent mb-8 glow">
          <span className="text-text-secondary">## </span>awards & certifications
        </h2>
        <div className="space-y-4">
          <div className="border border-border rounded-lg p-5 hover:border-accent/50 transition-colors card-glow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-accent text-sm font-bold">
                  Champion of Excellence Award
                </h3>
                <p className="text-text-secondary text-xs mt-1">Ascendion</p>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded border border-yellow-800 text-yellow-400">
                award
              </span>
            </div>
          </div>
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="border border-border rounded-lg p-5 hover:border-accent/50 transition-colors card-glow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-accent text-sm font-bold">
                    {cert.title}
                  </h3>
                  <p className="text-text-secondary text-xs mt-1">
                    {cert.issuer}
                  </p>
                </div>
                <span className="text-text-secondary text-xs border border-border px-2 py-0.5 rounded">
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
