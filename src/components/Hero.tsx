import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

const Hero = () => {
  const phrases = [
    "intelligent customer support bots",
    "documentation assistants", 
    "email agents",
    "actionable metrics dashboards"
  ];
  
  const currentPhrase = useTypingAnimation(phrases, 80, 2000);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full border border-primary/20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border border-accent/20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10 animate-spin" style={{ animationDuration: '30s' }}></div>
        
        {/* Magic visual elements */}
        <div className="absolute top-1/4 right-1/4 text-accent/30 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          ✨
        </div>
        <div className="absolute bottom-1/4 left-1/4 text-primary/30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
          🪄
        </div>
        <div className="absolute top-3/4 right-1/3 text-accent/20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}>
          ⚡
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="gradient-text">Where Data Meets Magic:</span>
            <br />
            <span className="text-foreground">AI Solutions that</span>
            <br />
            <span className="gradient-accent-text">Automate, Analyze, and Accelerate</span>
            <br />
            <span className="text-foreground">Your Business</span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-semibold text-muted-foreground space-y-4">
            <div>We build</div>
            <div className="h-16 flex items-center justify-center">
              <span className="gradient-text text-3xl md:text-5xl font-bold">
                {currentPhrase}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" variant="gradient" className="min-w-[200px]">
              Talk to our team
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px]">
              View our services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;