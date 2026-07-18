import { clearAuthData, getStoredUser } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const user = getStoredUser();

  const handleLogout = () => {
    clearAuthData();
    navigate("/login");
  };

  return (
    <main className="admin-dashboard-page">
      <header className="admin-topbar">
        <div>
          <span className="admin-badge">BR30 FoodOS Admin</span>
          <h1>Master Admin Dashboard</h1>
          <p>Welcome {user?.firstName || "Admin"}, manage FoodOS platform operations here.</p>
        </div>

        <div className="admin-actions">
          <Link to="/dashboard" target="_blank" rel="noreferrer">
            Go to Dashboard
          </Link>

          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <section className="admin-grid">
        <div className="admin-card">
          <span>Total Shops</span>
          <strong>0</strong>
          <p>Registered food businesses</p>
        </div>

        <div className="admin-card">
          <span>Active Owners</span>
          <strong>0</strong>
          <p>Verified shop owners</p>
        </div>

        <div className="admin-card">
          <span>Staff Users</span>
          <strong>0</strong>
          <p>Team members across shops</p>
        </div>

        <div className="admin-card">
          <span>Pending Verifications</span>
          <strong>0</strong>
          <p>Accounts waiting review</p>
        </div>
      </section>

      <section className="admin-panel">
        <h2>Platform Overview</h2>
        <p>Admin APIs will connect here next: users, shops, subscriptions, roles, billing and support management.</p>
      </section>

      <style>{`
.admin-dashboard-page{min-height:100vh;background:var(--hero-gradient);color:var(--text);padding:32px;width:min(1180px,100%);margin:0 auto}.admin-topbar{display:flex;align-items:flex-start;justify-content:space-between;gap:22px;padding:24px;border:1px solid var(--border);border-radius:26px;background:var(--surface);backdrop-filter:blur(20px);box-shadow:var(--shadow-soft)}.admin-badge{display:inline-flex;padding:8px 13px;border-radius:999px;background:rgba(0,229,168,.12);color:var(--primary);border:1px solid rgba(0,229,168,.26);font-size:13px;font-weight:800;margin-bottom:14px}.admin-topbar h1{font-size:clamp(30px,4vw,48px);margin:0 0 10px}.admin-topbar p{margin:0;color:var(--text-soft);font-size:15px}.admin-topbar button{height:42px;padding:0 18px;border:1px solid var(--border);border-radius:999px;background:var(--card);color:var(--text);font-weight:800}.admin-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:22px}.admin-card{padding:22px;border-radius:22px;border:1px solid var(--border);background:var(--surface);box-shadow:var(--shadow-soft)}.admin-card span{display:block;color:var(--text-soft);font-size:13px;font-weight:800}.admin-card strong{display:block;font-size:36px;margin:10px 0;color:var(--primary)}.admin-card p{margin:0;color:var(--text-muted);font-size:13px}.admin-panel{margin-top:22px;padding:26px;border-radius:24px;border:1px solid var(--border);background:var(--surface)}.admin-panel h2{margin:0 0 10px}.admin-panel p{margin:0;color:var(--text-soft)}@media(max-width:900px){.admin-grid{grid-template-columns:repeat(2,1fr)}.admin-topbar{flex-direction:column}.admin-dashboard-page{padding:18px}}@media(max-width:560px){.admin-grid{grid-template-columns:1fr}}
      `}</style>
    </main>
  );
}
