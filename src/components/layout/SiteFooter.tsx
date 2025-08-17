const SiteFooter = () => {
  return (
    <footer className="border-t mt-20">
      <div className="container mx-auto py-10 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <h4 className="font-semibold mb-2">ASOFT</h4>
          <p className="text-muted-foreground">Advanced School Operations Facilitator Tool — AI-driven ERP for Zimbabwe.</p>
        </div>
        <div>
          <h5 className="font-medium mb-2">Product</h5>
          <ul className="space-y-1 text-muted-foreground">
            <li><a href="#modules" className="hover:text-primary transition">Modules</a></li>
            <li><a href="#pricing" className="hover:text-primary transition">Pricing</a></li>
            <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2">Compliance</h5>
          <ul className="space-y-1 text-muted-foreground">
            <li>Data encryption & backups</li>
            <li>Audit trails & access controls</li>
            <li>Multi-device support</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-6 text-center text-muted-foreground text-xs">© {new Date().getFullYear()} ASOFT. All rights reserved.</div>
    </footer>
  );
};

export default SiteFooter;
