import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="container mx-auto py-16 md:py-24">
      <div className="rounded-2xl border p-10 md:p-12 bg-gradient-hero card-elevated">
        <h2 className="text-2xl md:text-3xl font-bold">Ready to transform your school operations?</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">Start with a free trial or book a guided demo. See how ASOFT brings AI, automation and real-time intelligence to your institution.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="hero" size="lg">Start Free Trial</Button>
          <Button variant="outline" size="lg">Book a Demo</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
