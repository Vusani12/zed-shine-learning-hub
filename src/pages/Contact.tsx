import ConstructionHeader from "@/components/layout/ConstructionHeader";
import ConstructionFooter from "@/components/layout/ConstructionFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <ConstructionHeader />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your construction project? Contact our team of experts for 
              professional consultation and personalized service.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+263 77 123 4567" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <select 
                        id="projectType"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                      >
                        <option value="">Select Project Type</option>
                        <option value="residential">Residential Construction</option>
                        <option value="commercial">Commercial Building</option>
                        <option value="renovation">Renovation/Extension</option>
                        <option value="civil">Civil Works</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="budget">Estimated Budget (USD)</Label>
                      <select 
                        id="budget"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="over-100k">Over $100,000</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Project Location</Label>
                      <Input id="location" placeholder="e.g., Harare, Bulawayo, Mutare" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                        rows={5}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                
                {/* Contact Details */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Office Address</h4>
                        <p className="text-muted-foreground">
                          123 Construction Avenue<br />
                          Belvedere, Harare<br />
                          Zimbabwe
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Phone Numbers</h4>
                        <p className="text-muted-foreground">
                          Office: +263 4 123 4567<br />
                          Mobile: +263 77 123 4567<br />
                          WhatsApp: +263 77 123 4567
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Email Addresses</h4>
                        <p className="text-muted-foreground">
                          General: info@chenesai.co.zw<br />
                          Projects: projects@chenesai.co.zw<br />
                          Support: support@chenesai.co.zw
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Business Hours</h4>
                        <p className="text-muted-foreground">
                          Monday - Friday: 7:30 AM - 5:00 PM<br />
                          Saturday: 8:00 AM - 1:00 PM<br />
                          Sunday: Emergency calls only
                        </p>
                      </div>
                    </div>
                    
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Quick Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    
                    <Button className="w-full" asChild>
                      <a href="tel:+263771234567">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now: +263 77 123 4567
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://wa.me/263771234567" target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        WhatsApp Chat
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <a href="mailto:info@chenesai.co.zw">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Us
                      </a>
                    </Button>
                    
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-red-700">Emergency Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-600 text-sm mb-4">
                      For construction emergencies and urgent repairs outside business hours:
                    </p>
                    <Button variant="destructive" className="w-full" asChild>
                      <a href="tel:+263771234567">
                        Emergency: +263 77 123 4567
                      </a>
                    </Button>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Find Our Office</h2>
              <p className="text-muted-foreground">
                Visit us at our Harare office for in-person consultations and project discussions.
              </p>
            </div>
            
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interactive map will be embedded here<br />
                  showing our office location in Harare
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ConstructionFooter />
    </div>
  );
};

export default Contact;