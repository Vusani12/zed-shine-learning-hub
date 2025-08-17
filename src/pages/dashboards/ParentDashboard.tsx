import DashboardLayout from "@/components/layout/DashboardLayout";
import RoleDashboard from "@/components/dashboard/RoleDashboard";

const ParentDashboard = () => (
  <DashboardLayout title="Parent">
    <RoleDashboard
      role="Parent"
      intro="Monitor your child’s progress, attendance, and fee obligations."
      kpis={[
        { label: "Children Linked", value: "2" },
        { label: "Outstanding Fees", value: "$0.00" },
        { label: "Unread Notices", value: "3" },
        { label: "Upcoming Events", value: "2" }
      ]}
      links={[
        { label: "Results & Reports", to: "#" },
        { label: "Fees & Invoices", to: "#" },
        { label: "Notices", to: "#" },
      ]}
    />
  </DashboardLayout>
);

export default ParentDashboard;
