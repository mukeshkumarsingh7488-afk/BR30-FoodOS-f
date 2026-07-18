import { Plus, ShoppingBag } from "lucide-react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import PageHeader from "../../components/dashboard/PageHeader";
import EmptyState from "../../components/dashboard/EmptyState";

export default function Orders() {
  return (
    <>
      <DashboardLayout title="Orders" subtitle="Track dine-in, takeaway and online orders.">
        <PageHeader
          eyebrow="Order Module"
          title="Orders"
          description="Monitor live orders, payment status, kitchen status, order history and customer requests."
          action={
            <button className="foodos-primary-btn">
              <Plus size={18} /> Create Order
            </button>
          }
        />
        <EmptyState title="Orders workspace ready" description="Order cards, filters, kitchen flow and payment status will connect here when backend order APIs are added." />
      </DashboardLayout>
      <style>{`.foodos-primary-btn{height:46px;padding:0 18px;border:0;border-radius:15px;background:linear-gradient(135deg,#00ff88,#00d9ff);color:#02100a;font-size:13px;font-weight:950;display:flex;align-items:center;justify-content:center;gap:9px;cursor:pointer;box-shadow:0 18px 36px rgba(0,255,136,.18);}`}</style>
    </>
  );
}
