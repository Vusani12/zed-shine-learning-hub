import { Button } from "@/components/ui/button";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <a href="/" className="font-extrabold tracking-tight text-lg">
          ASOFT
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#modules" className="hover:text-primary transition-colors">Modules</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          <a href="/dash" className="hover:text-primary transition-colors">Dashboards</a>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden sm:inline-flex">Sign in</Button>
          <Button variant="hero">Book a Demo</Button>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
