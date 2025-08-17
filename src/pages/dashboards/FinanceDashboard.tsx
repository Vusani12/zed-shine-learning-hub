import DashboardLayout from "@/components/layout/DashboardLayout";
import RoleDashboard from "@/components/dashboard/RoleDashboard";

const FinanceDashboard = () => (
  <DashboardLayout title="Finance">
    <RoleDashboard
      role="Finance"
      intro="Oversee collections, expenditures, payroll, and financial health."
      kpis={[
        { label: "Term Collections", value: "$182,400" },
        { label: "Arrears", value: "$23,100", change: "-5% MoM" },
        { label: "Expenses", value: "$61,240" },
        { label: "Payroll Ready", value: "96%" }
      ]}
      links={[
        { label: "Invoices & Receipts", to: "#" },
        { label: "Debt Management", to: "#" },
        { label: "Payroll", to: "#" },
      ]}
    />
  </DashboardLayout>
);

export default FinanceDashboard;
