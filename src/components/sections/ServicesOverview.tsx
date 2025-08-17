import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Building2, 
  Wrench, 
  MapPin, 
  Palette, 
  ClipboardList,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, housing estates, and residential developments built to the highest standards.",
      href: "/services#residential"
    },
    {
      icon: Building2,
      title: "Commercial & Industrial",
      description: "Office buildings, warehouses, retail spaces, and industrial facilities.",
      href: "/services#commercial"
    },
    {
      icon: Wrench,
      title: "Renovations & Extensions",
      description: "Transform existing spaces with modern renovations and seamless extensions.",
      href: "/services#renovations"
    },
    {
      icon: MapPin,
      title: "Civil Works",
      description: "Infrastructure projects including roads, drainage systems, and site preparation.",
      href: "/services#civil"
    },
    {
      icon: Palette,
      title: "Interior Finishes",
      description: "Modern interior designs and high-quality finishing touches for all projects.",
      href: "/services#interior"
    },
    {
      icon: ClipboardList,
      title: "Project Management",
      description: "End-to-end project management ensuring timely delivery and quality control.",
      href: "/services#management"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Construction Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, we deliver comprehensive construction solutions 
            tailored to your specific needs and requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto" asChild>
                    <Link to={service.href} className="flex items-center text-primary hover:text-primary/80">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;