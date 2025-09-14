import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      title: "Customer Support Bot",
      description: "Intelligent AI agents that handle customer inquiries 24/7, providing instant responses and seamless escalation to human agents when needed.",
      features: ["24/7 Availability", "Multi-language Support", "Smart Escalation", "Learning Capabilities"],
      icon: "🤖",
    },
    {
      title: "Email Agent",
      description: "Automated email responses that understand context, sentiment, and urgency to provide personalized replies to customer emails.",
      features: ["Auto-Reply", "Context Understanding", "Sentiment Analysis", "Priority Sorting"],
      icon: "📧",
    },
    {
      title: "Competitive Intelligence Agent",
      description: "AI-powered sales assistant that provides real-time competitive insights and selling points to empower your sales team.",
      features: ["Real-time Insights", "Competitive Analysis", "Sales Support", "Feature Comparison"],
      icon: "🎯",
    },
    {
      title: "Metrics Dashboard",
      description: "Advanced analytics platform that tracks AI performance metrics including hallucination rates, usefulness scores, and model drift detection.",
      features: ["Hallucination Tracking", "Usefulness Metrics", "Drift Detection", "Performance Analytics"],
      icon: "📊",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">AI Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your customer support operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-effect hover-glow hover:scale-105 transition-all duration-300 border-border/50"
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-lg text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <Badge 
                      key={featureIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;