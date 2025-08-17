import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "John Mukamuri",
      role: "Homeowner",
      project: "Residential Home - Borrowdale",
      rating: 5,
      content: "Chenesai delivered beyond our expectations. Their attention to detail and professional approach made our dream home a reality. The quality of work is outstanding.",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Chinyama",
      role: "Managing Director",
      project: "Office Complex - CBD",
      rating: 5,
      content: "Professional, reliable, and efficient. Chenesai completed our office complex ahead of schedule without compromising on quality. Highly recommended.",
      image: "/placeholder.svg"
    },
    {
      name: "David Moyo",
      role: "Property Developer",
      project: "Housing Estate - Mt Pleasant",
      rating: 5,
      content: "Working with Chenesai on our housing estate was seamless. Their expertise in modern construction techniques and project management is exceptional.",
      image: "/placeholder.svg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about their experience with Chenesai.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <Quote className="h-8 w-8 text-primary/30" />
              </div>
              
              <blockquote className="text-xl md:text-2xl text-center mb-8 leading-relaxed">
                "{currentTestimonial.content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                ))}
              </div>

              <div className="text-center space-y-2">
                <div className="font-semibold text-lg">{currentTestimonial.name}</div>
                <div className="text-muted-foreground">{currentTestimonial.role}</div>
                <div className="text-sm text-primary">{currentTestimonial.project}</div>
              </div>

              <div className="flex justify-center items-center space-x-4 mt-8">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;