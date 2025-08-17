import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Our Services</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Student Management</h2>
              <p className="text-muted-foreground">Comprehensive student information system with enrollment, attendance, and progress tracking.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Academic Planning</h2>
              <p className="text-muted-foreground">Curriculum management, timetable scheduling, and academic calendar coordination.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Communication Hub</h2>
              <p className="text-muted-foreground">Seamless communication between teachers, students, and parents through our platform.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Resource Management</h2>
              <p className="text-muted-foreground">Library management, equipment tracking, and facility scheduling systems.</p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Services;