import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children, title = "Dashboard", subtitle = "Manage your food business from one powerful workspace." }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="foodos-dashboard-shell">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="foodos-dashboard-main">
          <Topbar onMenuClick={() => setSidebarOpen(true)} title={title} subtitle={subtitle} />
          <section className="foodos-dashboard-content">{children}</section>
        </main>
      </div>

      <style>{`
        .foodos-dashboard-shell{min-height:100vh;background:radial-gradient(circle at top left,rgba(0,255,136,.16),transparent 34%),linear-gradient(135deg,#020706 0%,#05120d 48%,#020403 100%);color:#f4fff8;display:flex;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}
        .foodos-dashboard-main{flex:1;min-width:0;margin-left:292px;}
        .foodos-dashboard-content{padding:28px;max-width:1500px;margin:0 auto;}
        @media(max-width:1024px){.foodos-dashboard-main{margin-left:0}.foodos-dashboard-content{padding:22px 16px 34px;}}
      `}</style>
    </>
  );
}
