import { Plus, QrCode } from "lucide-react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import PageHeader from "../../components/dashboard/PageHeader";
import EmptyState from "../../components/dashboard/EmptyState";

export default function QRTables() {
  return (
    <>
      <DashboardLayout title="QR Tables" subtitle="Generate and manage table QR codes.">
        <PageHeader
          eyebrow="QR Ordering"
          title="QR Tables"
          description="Create table-wise QR codes for dine-in ordering, table identification and contactless menu access."
          action={
            <button className="foodos-primary-btn">
              <Plus size={18} /> Add Table QR
            </button>
          }
        />
        <EmptyState title="QR table system ready" description="Backend will later generate table QR codes, public menu links and table-specific order sessions." />
      </DashboardLayout>
      <style>{`.foodos-primary-btn{height:46px;padding:0 18px;border:0;border-radius:15px;background:linear-gradient(135deg,#00ff88,#00d9ff);color:#02100a;font-size:13px;font-weight:950;display:flex;align-items:center;justify-content:center;gap:9px;cursor:pointer;box-shadow:0 18px 36px rgba(0,255,136,.18);}`}</style>
    </>
  );
}
