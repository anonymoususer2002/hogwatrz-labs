import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import magicalInsights from "@/assets/magical-insights.png";
import automatedCommunication from "@/assets/automated-communication.png";
import instantSupport from "@/assets/instant-support.png";
import analyzeVisualize from "@/assets/analyze-visualize.png";

const Hero = () => {
  const phrases = [
    "intelligent customer support bots",
    "documentation assistants", 
    "email agents",
    "actionable metrics dashboards"
  ];
  
  const currentPhrase = useTypingAnimation(phrases, 80, 2000);

  const images = [instantSupport, automatedCommunication, magicalInsights, analyzeVisualize];
  const currentImageIndex = phrases.findIndex(phrase => currentPhrase.includes(phrase.split(' ')[0]));
  const currentImage = images[currentImageIndex] || images[0];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full border border-primary/20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border border-accent/20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10 animate-spin" style={{ animationDuration: '30s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="gradient-text">Where Data Meets Magic:</span>
              <br />
              <span className="text-foreground">AI Solutions that</span>
              <br />
              <span className="gradient-accent-text">Automate, Analyze, and Accelerate</span>
              <br />
              <span className="text-foreground">Your Business</span>
            </h1>
            
            <div className="text-lg md:text-xl lg:text-2xl font-semibold text-muted-foreground space-y-3">
              <div>We build</div>
              <div className="h-12 flex items-center justify-center lg:justify-start">
                <span className="gradient-text text-xl md:text-2xl lg:text-3xl font-bold">
                  {currentPhrase}
                  <span className="animate-pulse text-primary">|</span>
                </span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-6">
              <Button size="lg" variant="gradient" className="min-w-[200px]">
                Talk to our team
              </Button>
              <Button size="lg" variant="outline" className="min-w-[200px]">
                View our services
              </Button>
            </div>
          </div>

          {/* Right side - Dynamic image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={currentImage} 
                alt="AI Service Illustration" 
                className="w-full max-w-md lg:max-w-lg h-auto object-contain transition-all duration-500 ease-in-out transform hover:scale-105"
              />
              
              {/* Floating magic elements around the image */}
              <div className="absolute -top-4 -right-4 text-2xl text-accent/50 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
                ✨
              </div>
              <div className="absolute -bottom-4 -left-4 text-2xl text-primary/50 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
                🪄
              </div>
              <div className="absolute top-1/4 -left-6 text-xl text-accent/30 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}>
                ⚡
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;