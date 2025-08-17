import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Zed Shine School Hub
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Comprehensive school management system designed for modern educational institutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Student Management</h3>
              <p className="text-muted-foreground">Track student progress, attendance, and academic performance in one unified platform.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Teacher Tools</h3>
              <p className="text-muted-foreground">Empower educators with comprehensive tools for lesson planning and student assessment.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Parent Portal</h3>
              <p className="text-muted-foreground">Keep parents engaged with real-time updates on their children's academic journey.</p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;