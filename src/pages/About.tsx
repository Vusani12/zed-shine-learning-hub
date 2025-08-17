import ConstructionHeader from "@/components/layout/ConstructionHeader";
import ConstructionFooter from "@/components/layout/ConstructionFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Award, Lightbulb, Shield, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description: "We never compromise on quality, using only the best materials and construction practices."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our clients are at the heart of everything we do, ensuring their vision becomes reality."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and modern construction techniques for better results."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Building responsibly for future generations with eco-friendly practices."
    }
  ];

  const team = [
    {
      name: "Engineer Tendai Chenesai",
      role: "Founder & Managing Director",
      description: "15+ years in construction with expertise in project management and sustainable building.",
      image: "/placeholder.svg"
    },
    {
      name: "Architect Sarah Munemo",
      role: "Lead Architect",
      description: "Award-winning architect specializing in modern residential and commercial designs.",
      image: "/placeholder.svg"
    },
    {
      name: "Foreman Patrick Moyo",
      role: "Construction Manager",
      description: "20+ years of hands-on construction experience ensuring quality and safety.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div>
      <ConstructionHeader />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Chenesai</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building Zimbabwe's future with modern construction solutions, 
              quality craftsmanship, and unwavering commitment to excellence.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2009, Chenesai Construction began with a simple vision: 
                    to transform Zimbabwe's construction landscape through quality, 
                    innovation, and customer satisfaction.
                  </p>
                  <p>
                    What started as a small team of dedicated professionals has grown 
                    into one of Zimbabwe's most trusted construction companies, 
                    completing over 500 projects across residential, commercial, 
                    and public sectors.
                  </p>
                  <p>
                    Today, we continue to push boundaries, embracing sustainable 
                    building practices and modern construction techniques while 
                    maintaining the traditional values of craftsmanship and integrity.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm text-muted-foreground">Team Members</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission & Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Guided by strong principles and unwavering commitment to excellence 
                in every project we undertake.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="text-center h-full">
                    <CardContent className="p-6 space-y-4">
                      <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                To deliver exceptional construction solutions that exceed client expectations 
                while contributing to Zimbabwe's infrastructure development through innovation, 
                sustainability, and unwavering commitment to quality.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our experienced professionals bring decades of combined expertise 
                to every project.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member) => (
                <Card key={member.name} className="text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl border p-10 md:p-12 bg-gradient-hero card-elevated text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your construction project and see how we can 
                bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/quote">Get Free Quote</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ConstructionFooter />
    </div>
  );
};

export default About;