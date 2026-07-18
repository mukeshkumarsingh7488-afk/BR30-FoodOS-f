import { Plus, Users } from "lucide-react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import PageHeader from "../../components/dashboard/PageHeader";
import EmptyState from "../../components/dashboard/EmptyState";

export default function Staff() {
  return (
    <>
      <DashboardLayout title="Staff" subtitle="Manage team members and permissions.">
        <PageHeader
          eyebrow="Team Module"
          title="Staff Management"
          description="Invite staff, assign roles, manage permissions and control business access for managers, kitchen staff and billing users."
          action={
            <button className="foodos-primary-btn">
              <Plus size={18} /> Invite Staff
            </button>
          }
        />
        <EmptyState title="Staff module ready" description="Role-based staff access will connect here for owner, manager, cashier, kitchen and delivery roles." />
      </DashboardLayout>
      <style>{`.foodos-primary-btn{height:46px;padding:0 18px;border:0;border-radius:15px;background:linear-gradient(135deg,#00ff88,#00d9ff);color:#02100a;font-size:13px;font-weight:950;display:flex;align-items:center;justify-content:center;gap:9px;cursor:pointer;box-shadow:0 18px 36px rgba(0,255,136,.18);}`}</style>
    </>
  );
}
