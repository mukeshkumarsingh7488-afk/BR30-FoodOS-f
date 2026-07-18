import { IndianRupee, ShoppingBag, QrCode, Utensils } from "lucide-react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import DashboardCard from "../../components/dashboard/DashboardCard";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentActivity from "../../components/dashboard/RecentActivity";
import PageHeader from "../../components/dashboard/PageHeader";

const stats = [
  { label: "Today's Revenue", value: "₹0", change: "Ready", icon: IndianRupee, tone: "green" },
  { label: "Today's Orders", value: "0", change: "Live soon", icon: ShoppingBag, tone: "blue" },
  { label: "Active QR Tables", value: "0", change: "Setup", icon: QrCode, tone: "purple" },
  { label: "Menu Items", value: "0", change: "Add items", icon: Utensils, tone: "orange" },
];

export default function Dashboard() {
  return (
    <>
      <DashboardLayout title="Business Dashboard" subtitle="Control orders, menu, QR tables, staff and business operations from one premium workspace.">
        <PageHeader eyebrow="Phase 2 Workspace" title="Restaurant / Business Dashboard" description="This dashboard foundation is built for multi-tenant FoodOS businesses. Today it is frontend-ready; tomorrow it can connect directly with restaurant-specific backend APIs." />

        <section className="foodos-stats-grid">
          {stats.map((item) => (
            <DashboardCard key={item.label} {...item} />
          ))}
        </section>

        <div className="foodos-dashboard-grid">
          <div>
            <QuickActions />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>
      </DashboardLayout>

      <style>{`
        .foodos-stats-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;}
        .foodos-dashboard-grid{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(360px,.75fr);gap:22px;align-items:start;}
        @media(max-width:1180px){.foodos-stats-grid{grid-template-columns:repeat(2,minmax(0,1fr));}.foodos-dashboard-grid{grid-template-columns:1fr;}}
        @media(max-width:560px){.foodos-stats-grid{grid-template-columns:1fr;gap:14px;}}
      `}</style>
    </>
  );
}
