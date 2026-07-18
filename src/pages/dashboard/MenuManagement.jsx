import { Plus, Utensils } from "lucide-react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import PageHeader from "../../components/dashboard/PageHeader";
import EmptyState from "../../components/dashboard/EmptyState";

export default function MenuManagement() {
  return (
    <>
      <DashboardLayout title="Menu Management" subtitle="Create, organize and control your food menu.">
        <PageHeader
          eyebrow="Menu Module"
          title="Menu Management"
          description="Manage menu categories, food items, pricing, availability, taxes and modifiers for your business."
          action={
            <button className="foodos-primary-btn">
              <Plus size={18} /> Add Menu Item
            </button>
          }
        />
        <EmptyState title="Menu setup ready" description="Backend APIs will connect here for categories, items, prices, images, taxes and stock availability." />
      </DashboardLayout>
      <style>{`.foodos-primary-btn{height:46px;padding:0 18px;border:0;border-radius:15px;background:linear-gradient(135deg,#00ff88,#00d9ff);color:#02100a;font-size:13px;font-weight:950;display:flex;align-items:center;justify-content:center;gap:9px;cursor:pointer;box-shadow:0 18px 36px rgba(0,255,136,.18);}`}</style>
    </>
  );
}
