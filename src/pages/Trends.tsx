import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const Trends = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Education Trends</h1>
          <div className="space-y-8">
            <article className="border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Digital Transformation in African Schools</h2>
              <p className="text-muted-foreground mb-4">
                The integration of technology in education across Africa is accelerating, with schools adopting comprehensive management systems to improve efficiency and student outcomes.
              </p>
              <div className="text-sm text-muted-foreground">
                Published: January 15, 2024
              </div>
            </article>
            <article className="border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Parent-School Communication Revolution</h2>
              <p className="text-muted-foreground mb-4">
                Modern schools are leveraging digital platforms to maintain constant communication with parents, leading to better student support and academic success.
              </p>
              <div className="text-sm text-muted-foreground">
                Published: December 20, 2023
              </div>
            </article>
            <article className="border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Data-Driven Education Management</h2>
              <p className="text-muted-foreground mb-4">
                Schools are increasingly using data analytics to track student performance, identify learning gaps, and optimize educational strategies.
              </p>
              <div className="text-sm text-muted-foreground">
                Published: November 10, 2023
              </div>
            </article>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Trends;