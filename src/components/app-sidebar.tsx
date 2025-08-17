import { NavLink, useLocation } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { Shield, Settings2, Users, GraduationCap, UserRound, Wallet, Book, Crown, Package } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar";

const items: { title: string; url: string; icon: LucideIcon }[] = [
  { title: "Super Admin", url: "/dash/superadmin", icon: Shield },
  { title: "School Admin", url: "/dash/school-admin", icon: Settings2 },
  { title: "Headmaster", url: "/dash/head", icon: Crown },
  { title: "Finance", url: "/dash/finance", icon: Wallet },
  { title: "Librarian", url: "/dash/librarian", icon: Book },
  { title: "Property Manager", url: "/dash/property", icon: Package },
  { title: "Staff", url: "/dash/staff", icon: Users },
  { title: "Student", url: "/dash/student", icon: GraduationCap },
  { title: "Parent", url: "/dash/parent", icon: UserRound },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar collapsible="icon" className={state === "collapsed" ? "w-14" : "w-64"}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboards</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink to={item.url} end>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
