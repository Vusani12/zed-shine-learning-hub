import { GraduationCap, Wallet, Library, Package, CalendarClock, Users, BarChart3, Settings } from "lucide-react";

const modules = [
  { icon: GraduationCap, title: "Student Management", desc: "Profiles, enrollment, IDs, behavior & boarding." },
  { icon: Wallet, title: "Finance & Payroll", desc: "Invoices, arrears, ledgers, payroll & gateways." },
  { icon: Library, title: "Library", desc: "Cataloguing, reservations, fines & reminders." },
  { icon: Package, title: "Property Tracking", desc: "Assets, depreciation, maintenance & incidents." },
  { icon: CalendarClock, title: "Class Management", desc: "AI timetables, assessments & insights." },
  { icon: Users, title: "Staff Management", desc: "Files, duties, attendance & leave." },
  { icon: BarChart3, title: "Reports & Analytics", desc: "Dashboards, AI trends & exports." },
  { icon: Settings, title: "Settings & Control", desc: "Roles, packages, messaging & branches." },
];

const ModulesGrid = () => {
  return (
    <section id="modules" className="container mx-auto py-16 md:py-24">
      <header className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Comprehensive Modules</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">A unified platform replacing fragmented systems — built to scale from rural schools to urban colleges.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map(({ icon: Icon, title, desc }) => (
          <article key={title} className="rounded-xl border p-5 hover:shadow-[var(--shadow-soft)] transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-semibold">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ModulesGrid;
