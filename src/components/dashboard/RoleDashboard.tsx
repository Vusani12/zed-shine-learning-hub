import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

type KPI = { label: string; value: string; change?: string };

type RoleDashboardProps = {
  role: string;
  intro: string;
  kpis: KPI[];
  links: { label: string; to: string }[];
};

const RoleDashboard = ({ role, intro, kpis, links }: RoleDashboardProps) => {
  useEffect(() => {
    document.title = `${role} Dashboard — ASOFT`;
  }, [role]);

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight">{role} Dashboard</h1>
        <p className="text-muted-foreground mt-1">{intro}</p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">{kpi.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              {kpi.change && (
                <p className="text-xs text-muted-foreground mt-1">{kpi.change}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </section>

      <section>
        <h2 className="text-lg font-medium mb-3">Quick links</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <Link key={l.label} to={l.to} className="rounded-md border p-4 hover:bg-muted transition">
              {l.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RoleDashboard;
