import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="gradient-text">Customer Support?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how our AI agents can revolutionize your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="glass-effect border-border/50 text-center">
              <CardHeader>
                <div className="text-3xl mb-4">💬</div>
                <CardTitle>Live Demo</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  See our AI agents in action with a personalized demonstration
                </CardDescription>
                <Button variant="outline" className="mt-4 w-full">
                  Schedule Demo
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/50 text-center">
              <CardHeader>
                <div className="text-3xl mb-4">📞</div>
                <CardTitle>Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get expert advice on implementing AI in your workflow
                </CardDescription>
                <Button variant="gradient" className="mt-4 w-full">
                  Book Call
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/50 text-center">
              <CardHeader>
                <div className="text-3xl mb-4">🚀</div>
                <CardTitle>Free Trial</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Start with a 14-day free trial of our complete platform
                </CardDescription>
                <Button variant="outline" className="mt-4 w-full">
                  Start Trial
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="glass-effect border-border/50 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="gradient" size="lg" className="flex-1">
                    Contact Sales
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    Support Center
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Or email us directly at{" "}
                  <span className="text-primary font-medium">hello@aisupport.com</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;