import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const roles = [
  { name: "Super Admin", path: "/dash/superadmin", desc: "Multi-school oversight, global settings, and governance." },
  { name: "School Admin", path: "/dash/school-admin", desc: "School-level configuration, roles, and approvals." },
  { name: "Headmaster", path: "/dash/head", desc: "Academic leadership and strategic insights." },
  { name: "Finance", path: "/dash/finance", desc: "Fees, invoices, payroll, and financial reports." },
  { name: "Librarian", path: "/dash/librarian", desc: "Catalog, issues/returns, fines, and analytics." },
  { name: "Property Manager", path: "/dash/property", desc: "Assets, maintenance, and incident billing." },
  { name: "Staff", path: "/dash/staff", desc: "Timetables, lesson plans, assessments, and workload." },
  { name: "Student", path: "/dash/student", desc: "Classes, attendance, exams, and resources." },
  { name: "Parent", path: "/dash/parent", desc: "Fees, results, notices, and communication." },
];

const DashboardHome = () => {
  return (
    <DashboardLayout title="Dashboards">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((r) => (
          <Card key={r.path} className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-base">{r.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">{r.desc}</p>
              <Link to={r.path} className="text-primary underline underline-offset-4">Open {r.name}</Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default DashboardHome;
