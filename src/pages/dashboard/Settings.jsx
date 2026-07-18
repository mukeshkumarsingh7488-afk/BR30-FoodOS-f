import { Save } from "lucide-react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import PageHeader from "../../components/dashboard/PageHeader";
import EmptyState from "../../components/dashboard/EmptyState";

export default function Settings() {
  return (
    <>
      <DashboardLayout title="Settings" subtitle="Configure business profile and operating rules.">
        <PageHeader
          eyebrow="Business Settings"
          title="Settings"
          description="Manage business information, tax settings, order preferences, payment options, opening hours and notification rules."
          action={
            <button className="foodos-primary-btn">
              <Save size={18} /> Save Settings
            </button>
          }
        />
        <EmptyState title="Settings foundation ready" description="Business profile, restaurant timing, tax rules, payment config and notification preferences will connect here." />
      </DashboardLayout>
      <style>{`.foodos-primary-btn{height:46px;padding:0 18px;border:0;border-radius:15px;background:linear-gradient(135deg,#00ff88,#00d9ff);color:#02100a;font-size:13px;font-weight:950;display:flex;align-items:center;justify-content:center;gap:9px;cursor:pointer;box-shadow:0 18px 36px rgba(0,255,136,.18);}`}</style>
    </>
  );
}
