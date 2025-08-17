import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Our Portfolio</h1>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Zed Shine Primary</h3>
                <p className="text-sm text-muted-foreground">Complete digital transformation for primary education management.</p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/20"></div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Excellence High School</h3>
                <p className="text-sm text-muted-foreground">Advanced academic tracking and parent communication system.</p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20"></div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Future Leaders Academy</h3>
                <p className="text-sm text-muted-foreground">Comprehensive school management with integrated learning modules.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Portfolio;