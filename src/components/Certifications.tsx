const items = [
  {
    icon: "🏆",
    title: "Champion of Excellence Award",
    subtitle: "Recognized for outstanding performance and innovation at Ascendion",
    badge: "Award",
    badgeColor: "bg-amber-50 text-amber-700",
  },
  {
    icon: "🎓",
    title: "Generative AI Level 301",
    subtitle: "Cognixia · Advanced · Sep 2024",
    badge: "Advanced",
    badgeColor: "bg-purple-50 text-purple-700",
  },
  {
    icon: "🎓",
    title: "Generative AI Level 201",
    subtitle: "Cognixia · Intermediate · Aug 2024",
    badge: "Intermediate",
    badgeColor: "bg-blue-50 text-blue-700",
  },
  {
    icon: "🎓",
    title: "Generative AI Level 101",
    subtitle: "Cognixia · Foundation · Aug 2024",
    badge: "Foundation",
    badgeColor: "bg-green-50 text-green-700",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-text-primary mb-10">
          Awards & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="border border-border rounded-xl p-5 flex items-start gap-4 hover-lift hover-accent"
            >
              <span className="text-2xl">{item.icon}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
                <p className="text-text-secondary text-xs mt-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
