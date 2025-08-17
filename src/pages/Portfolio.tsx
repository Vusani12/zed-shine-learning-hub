import ConstructionHeader from "@/components/layout/ConstructionHeader";
import ConstructionFooter from "@/components/layout/ConstructionFooter";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ConstructionHeader />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Our Construction Portfolio</h1>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Residential Complex - Harare</h3>
                <p className="text-sm text-muted-foreground">Modern residential development with 50 units completed in 2023.</p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/20"></div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Commercial Plaza - Bulawayo</h3>
                <p className="text-sm text-muted-foreground">Three-story commercial complex with retail and office spaces.</p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20"></div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Bridge Construction - Mutare</h3>
                <p className="text-sm text-muted-foreground">Civil engineering project connecting rural communities.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ConstructionFooter />
    </div>
  );
};

export default Portfolio;