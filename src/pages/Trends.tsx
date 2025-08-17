import ConstructionHeader from "@/components/layout/ConstructionHeader";
import ConstructionFooter from "@/components/layout/ConstructionFooter";

const Trends = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ConstructionHeader />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Construction Industry News</h1>
          <div className="space-y-8">
            <article className="border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Infrastructure Development in Zimbabwe</h2>
              <p className="text-muted-foreground mb-4">
                Zimbabwe's construction sector is experiencing growth with new residential and commercial projects driving demand for quality construction services across the country.
              </p>
              <div className="text-sm text-muted-foreground">
                Published: January 15, 2024
              </div>
            </article>
            <article className="border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Sustainable Building Practices</h2>
              <p className="text-muted-foreground mb-4">
                Modern construction companies are adopting eco-friendly materials and sustainable building practices to reduce environmental impact while maintaining quality standards.
              </p>
              <div className="text-sm text-muted-foreground">
                Published: December 20, 2023
              </div>
            </article>
            <article className="border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Technology in Construction Management</h2>
              <p className="text-muted-foreground mb-4">
                The integration of project management software and digital tools is revolutionizing how construction projects are planned, executed, and monitored.
              </p>
              <div className="text-sm text-muted-foreground">
                Published: November 10, 2023
              </div>
            </article>
          </div>
        </div>
      </main>
      <ConstructionFooter />
    </div>
  );
};

export default Trends;