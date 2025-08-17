import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tiers = [
  { name: "Basic", price: 0.25, features: ["Core Student Management", "Class & Attendance Tracking", "Basic Reports", "Parent/Student Portal"] },
  { name: "Essential", price: 0.5, features: ["All Basic", "Finance Module", "Library Management", "Basic Analytics"] },
  { name: "Advanced", price: 1.0, features: ["All Essential", "Staff & Payroll", "Property/Assets", "Expanded Reports"] },
  { name: "Premium", price: 2.0, features: ["All Advanced", "AI + Smart Recommendations", "Advanced Analytics", "Custom Branding"] },
  { name: "Platinum", price: 5.0, features: ["All Premium", "Predictive Insights", "API Integrations", "Priority Support", "Unlimited Storage"] },
];

const Pricing = () => {
  return (
    <section id="pricing" className="container mx-auto py-16 md:py-24">
      <header className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Tiered Pricing (per student per term)</h2>
        <p className="text-muted-foreground mt-2">Flexible plans that grow with your school — pay only for what you need.</p>
      </header>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
        {tiers.map((tier) => (
          <Card key={tier.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>USD ${tier.price.toFixed(2)}</CardDescription>
            </CardHeader>
            <CardContent className="grow">
              <ul className="space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="text-muted-foreground">• {f}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={tier.name === 'Premium' || tier.name === 'Platinum' ? 'hero' : 'secondary'}>
                Choose {tier.name}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
