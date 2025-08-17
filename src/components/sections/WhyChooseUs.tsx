import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Clock, 
  Users, 
  Lightbulb, 
  CheckCircle, 
  Leaf 
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO 9001 certified processes ensuring the highest construction standards and quality control at every stage."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Proven track record of completing projects on schedule with efficient project management and planning."
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Over 15 years of experience with skilled professionals and certified craftsmen in all construction disciplines."
    },
    {
      icon: Lightbulb,
      title: "Modern Techniques",
      description: "Utilizing cutting-edge construction methods, latest technology, and innovative building solutions."
    },
    {
      icon: CheckCircle,
      title: "Customer Satisfaction",
      description: "100% client satisfaction rate with transparent communication and dedicated customer service throughout."
    },
    {
      icon: Leaf,
      title: "Sustainable Building",
      description: "Committed to eco-friendly practices and sustainable construction methods for a better future."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Chenesai</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine traditional craftsmanship with modern innovation to deliver 
            exceptional construction solutions that stand the test of time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card key={reason.title} className="text-center h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;