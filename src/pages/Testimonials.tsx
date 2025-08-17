import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">What Our Schools Say</h1>
          <div className="space-y-8">
            <div className="border rounded-lg p-6">
              <blockquote className="text-lg mb-4">
                "Zed Shine School Hub has revolutionized how we manage our school. The platform is intuitive and has improved communication between all stakeholders."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold">MK</span>
                </div>
                <div>
                  <p className="font-semibold">Mary Kambala</p>
                  <p className="text-sm text-muted-foreground">Headmistress, Sunshine Primary School</p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-6">
              <blockquote className="text-lg mb-4">
                "The student management features are exceptional. We can track everything from attendance to academic progress in one place."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-secondary font-semibold">JM</span>
                </div>
                <div>
                  <p className="font-semibold">Joseph Mwanza</p>
                  <p className="text-sm text-muted-foreground">Administrator, Excellence High School</p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-6">
              <blockquote className="text-lg mb-4">
                "Parents love the transparency and real-time updates about their children's progress. It has strengthened our school community."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent font-semibold">SN</span>
                </div>
                <div>
                  <p className="font-semibold">Sarah Nyirenda</p>
                  <p className="text-sm text-muted-foreground">Principal, Future Leaders Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Testimonials;