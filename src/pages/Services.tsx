import ConstructionHeader from "@/components/layout/ConstructionHeader";
import ConstructionFooter from "@/components/layout/ConstructionFooter";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ConstructionHeader />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Our Construction Services</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Residential Construction</h2>
              <p className="text-muted-foreground">Custom homes, renovations, and residential developments built to the highest standards.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Commercial Projects</h2>
              <p className="text-muted-foreground">Office buildings, retail spaces, and commercial developments across Zimbabwe.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Civil Engineering</h2>
              <p className="text-muted-foreground">Infrastructure projects including roads, bridges, and municipal developments.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Project Management</h2>
              <p className="text-muted-foreground">Complete project oversight from planning to completion with quality assurance.</p>
            </div>
          </div>
        </div>
      </main>
      <ConstructionFooter />
    </div>
  );
};

export default Services;