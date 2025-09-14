const TrustedBy = () => {
  const companies = [
    { name: "TechCorp", logo: "🏢" },
    { name: "DataFlow", logo: "📊" },
    { name: "CloudSync", logo: "☁️" },
    { name: "InnovateLab", logo: "🔬" },
    { name: "ScaleUp", logo: "📈" },
    { name: "DigitalEdge", logo: "💻" },
    { name: "FutureAI", logo: "🤖" },
    { name: "SmartSys", logo: "⚡" },
  ];

  return (
    <section className="py-16 bg-background/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
            Trusted by
          </h3>
          <p className="text-lg text-muted-foreground">
            Enterprises across industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="text-3xl">{company.logo}</div>
              <span className="text-sm font-medium text-muted-foreground">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;