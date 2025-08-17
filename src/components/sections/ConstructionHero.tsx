import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Building } from "lucide-react";
import { Link } from "react-router-dom";
// import heroImage from "@/assets/chenesai-hero.jpg";

const ConstructionHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Building Zimbabwe's
                <span className="text-primary block">Future Together</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Modern, sustainable, and innovative construction solutions that deliver 
                quality craftsmanship and exceed expectations.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/quote">
                  Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden surface-glass">
              <div className="w-full h-[500px] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-muted-foreground text-xl">
                Construction Project Preview
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -top-4 -right-4 bg-accent-2 text-white p-4 rounded-xl shadow-lg">
              <div className="text-sm font-medium">Quality Assured</div>
              <div className="text-xs opacity-90">ISO 9001 Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionHero;