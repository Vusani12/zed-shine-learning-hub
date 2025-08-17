import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Quote = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Get a Quote</h1>
          <div className="border rounded-lg p-6">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="school">School Name</Label>
                <Input id="school" placeholder="Enter your school name" />
              </div>
              <div>
                <Label htmlFor="students">Number of Students</Label>
                <Input id="students" type="number" placeholder="Approximate number of students" />
              </div>
              <div>
                <Label htmlFor="services">Services Needed</Label>
                <Textarea 
                  id="services" 
                  placeholder="Describe the services you're interested in"
                  rows={4}
                />
              </div>
              <div>
                <Label htmlFor="message">Additional Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Any additional information or questions"
                  rows={3}
                />
              </div>
              <Button type="submit" className="w-full">
                Request Quote
              </Button>
            </form>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Quote;