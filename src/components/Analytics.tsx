import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Analytics = () => {
  const metrics = [
    {
      title: "Hallucination Detection",
      value: "99.2%",
      description: "Accuracy in detecting AI-generated false information",
      trend: "+2.1%",
    },
    {
      title: "Response Usefulness",
      value: "94.7%",
      description: "Customer satisfaction with AI responses",
      trend: "+5.3%",
    },
    {
      title: "Model Drift",
      value: "0.03%",
      description: "Performance degradation over time",
      trend: "-0.1%",
    },
    {
      title: "Resolution Rate",
      value: "87.5%",
      description: "Issues resolved without human intervention",
      trend: "+8.2%",
    },
  ];

  const features = [
    {
      title: "Real-time Monitoring",
      description: "Track AI performance metrics in real-time with instant alerts for anomalies.",
      icon: "⚡",
    },
    {
      title: "Predictive Analytics",
      description: "Forecast potential issues before they impact customer experience.",
      icon: "🔮",
    },
    {
      title: "Custom Reporting",
      description: "Generate detailed reports tailored to your business needs and KPIs.",
      icon: "📈",
    },
    {
      title: "Integration Ready",
      description: "Seamlessly integrate with your existing tools and workflows.",
      icon: "🔗",
    },
  ];

  return (
    <section id="analytics" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced <span className="gradient-accent-text">Analytics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive metrics and insights to optimize your AI agents' performance
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="glass-effect border-border/50 text-center">
              <CardHeader className="pb-3">
                <CardTitle className="text-3xl font-bold gradient-text">
                  {metric.value}
                </CardTitle>
                <CardDescription className="font-medium">
                  {metric.title}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-2">
                  {metric.description}
                </p>
                <span className="text-sm font-medium text-green-400">
                  {metric.trend} from last month
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-effect hover-glow hover:scale-105 transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analytics;