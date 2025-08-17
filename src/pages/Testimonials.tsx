import ConstructionHeader from "@/components/layout/ConstructionHeader";
import ConstructionFooter from "@/components/layout/ConstructionFooter";

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ConstructionHeader />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">What Our Clients Say</h1>
          <div className="space-y-8">
            <div className="border rounded-lg p-6">
              <blockquote className="text-lg mb-4">
                "Chenesai Construction delivered our family home on time and within budget. The quality of work exceeded our expectations."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold">TM</span>
                </div>
                <div>
                  <p className="font-semibold">Tendai Mukamuri</p>
                  <p className="text-sm text-muted-foreground">Homeowner, Harare</p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-6">
              <blockquote className="text-lg mb-4">
                "Professional, reliable, and skilled. Our commercial building project was completed to the highest standards."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-secondary font-semibold">SM</span>
                </div>
                <div>
                  <p className="font-semibold">Sarah Moyo</p>
                  <p className="text-sm text-muted-foreground">Business Owner, Bulawayo</p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-6">
              <blockquote className="text-lg mb-4">
                "The team's attention to detail and commitment to quality made our renovation project a complete success."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent font-semibold">JC</span>
                </div>
                <div>
                  <p className="font-semibold">James Chikwanha</p>
                  <p className="text-sm text-muted-foreground">Property Developer, Mutare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ConstructionFooter />
    </div>
  );
};

export default Testimonials;