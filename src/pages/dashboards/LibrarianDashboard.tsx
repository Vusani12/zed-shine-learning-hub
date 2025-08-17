import DashboardLayout from "@/components/layout/DashboardLayout";
import RoleDashboard from "@/components/dashboard/RoleDashboard";

const LibrarianDashboard = () => (
  <DashboardLayout title="Librarian">
    <RoleDashboard
      role="Librarian"
      intro="Manage catalogues, issues/returns, fines, and reservations."
      kpis={[
        { label: "Books in Catalog", value: "12,480" },
        { label: "On Loan", value: "320" },
        { label: "Overdue", value: "28" },
        { label: "Reservations", value: "14" }
      ]}
      links={[
        { label: "Catalog", to: "#" },
        { label: "Issues & Returns", to: "#" },
        { label: "Fines", to: "#" },
      ]}
    />
  </DashboardLayout>
);

export default LibrarianDashboard;
