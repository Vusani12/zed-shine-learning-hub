import DashboardLayout from "@/components/layout/DashboardLayout";
import RoleDashboard from "@/components/dashboard/RoleDashboard";

const HeadmasterDashboard = () => (
  <DashboardLayout title="Headmaster">
    <RoleDashboard
      role="Headmaster / Principal"
      intro="Monitor academic performance, attendance, and resource allocation."
      kpis={[
        { label: "Overall Attendance", value: "93%" },
        { label: "At-risk Students", value: "21" },
        { label: "Teacher Workload", value: "Balanced" },
        { label: "Approval Queue", value: "4" }
      ]}
      links={[
        { label: "Performance Dashboards", to: "#" },
        { label: "Approvals", to: "#" },
        { label: "Reports", to: "#" },
      ]}
    />
  </DashboardLayout>
);

export default HeadmasterDashboard;
