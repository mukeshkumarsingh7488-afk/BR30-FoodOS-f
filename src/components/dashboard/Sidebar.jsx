import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, Utensils, QrCode, ShoppingBag, Users, Settings, ShieldCheck, LogOut, X } from "lucide-react";
import logoDark from "../../assets/logos/logo-dark.png";

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Menu Management", path: "/dashboard/menu", icon: Utensils },
  { label: "QR Tables", path: "/dashboard/qr-tables", icon: QrCode },
  { label: "Orders", path: "/dashboard/orders", icon: ShoppingBag },
  { label: "Staff", path: "/dashboard/staff", icon: Users },
  { label: "Settings", path: "/dashboard/settings", icon: Settings },
];

export default function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("br30FoodOSToken");
    localStorage.removeItem("br30FoodOSUser");
    navigate("/login");
  };

  return (
    <>
      <aside className={`foodos-sidebar ${isOpen ? "active" : ""}`}>
        <div className="foodos-sidebar-head">
          <div className="foodos-brand">
            <img src={logoDark} alt="BR30 FoodOS" />
            <div>
              <strong>BR30 FoodOS</strong>
              <span>Business Console</span>
            </div>
          </div>
          <button className="foodos-close-btn" onClick={onClose} aria-label="Close sidebar">
            <X size={20} />
          </button>
        </div>

        <nav className="foodos-sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink key={item.path} to={item.path} end={item.path === "/dashboard"} onClick={onClose} className={({ isActive }) => `foodos-nav-item ${isActive ? "active" : ""}`}>
                <Icon size={19} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="foodos-sidebar-card">
          <ShieldCheck size={22} />
          <div>
            <strong>Production Ready</strong>
            <p>Multi-tenant dashboard foundation for restaurants, cafes, bakeries and cloud kitchens.</p>
          </div>
        </div>

        <button className="foodos-logout" onClick={handleLogout}>
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </aside>

      {isOpen && <button className="foodos-sidebar-backdrop" onClick={onClose} aria-label="Close dashboard menu" />}

      <style>{`
        .foodos-sidebar{width:292px;height:100vh;position:fixed;left:0;top:0;z-index:60;padding:22px;background:linear-gradient(180deg,rgba(2,12,8,.96),rgba(1,6,4,.98));border-right:1px solid rgba(0,255,136,.14);box-shadow:18px 0 60px rgba(0,0,0,.35);display:flex;flex-direction:column;gap:22px;}
        .foodos-sidebar-head{display:flex;align-items:center;justify-content:space-between;gap:14px;}
        .foodos-brand{display:flex;align-items:center;gap:12px;min-width:0;}
        .foodos-brand img{width:44px;height:44px;border-radius:14px;object-fit:contain;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);}
        .foodos-brand strong{display:block;font-size:16px;font-weight:900;letter-spacing:-.02em;}
        .foodos-brand span{display:block;margin-top:3px;font-size:12px;color:rgba(244,255,248,.58);}
        .foodos-close-btn{display:none;width:38px;height:38px;border:0;border-radius:12px;background:rgba(255,255,255,.06);color:#fff;align-items:center;justify-content:center;cursor:pointer;}
        .foodos-sidebar-nav{display:flex;flex-direction:column;gap:8px;}
        .foodos-nav-item{height:48px;padding:0 14px;border-radius:15px;color:rgba(244,255,248,.72);text-decoration:none;display:flex;align-items:center;gap:12px;font-size:14px;font-weight:800;border:1px solid transparent;transition:.22s ease;}
        .foodos-nav-item:hover{background:rgba(255,255,255,.055);color:#fff;border-color:rgba(255,255,255,.08);}
        .foodos-nav-item.active{background:linear-gradient(135deg,rgba(0,255,136,.2),rgba(0,217,255,.08));color:#fff;border-color:rgba(0,255,136,.28);box-shadow:0 14px 38px rgba(0,255,136,.08);}
        .foodos-sidebar-card{margin-top:auto;padding:16px;border-radius:20px;background:linear-gradient(135deg,rgba(0,255,136,.14),rgba(255,255,255,.045));border:1px solid rgba(0,255,136,.18);display:flex;gap:12px;color:#eafff3;}
        .foodos-sidebar-card svg{color:#00ff88;flex:0 0 auto;}
        .foodos-sidebar-card strong{font-size:13px;font-weight:900;}
        .foodos-sidebar-card p{margin:6px 0 0;font-size:12px;line-height:1.55;color:rgba(244,255,248,.62);}
        .foodos-logout{height:48px;border:1px solid rgba(255,255,255,.1);border-radius:16px;background:rgba(255,255,255,.045);color:#fff;display:flex;align-items:center;justify-content:center;gap:10px;font-weight:900;cursor:pointer;transition:.22s ease;}
        .foodos-logout:hover{background:rgba(255,77,77,.12);border-color:rgba(255,77,77,.28);}
        .foodos-sidebar-backdrop{display:none;}
        @media(max-width:1024px){.foodos-sidebar{transform:translateX(-105%);transition:.28s ease;width:286px}.foodos-sidebar.active{transform:translateX(0)}.foodos-close-btn{display:flex}.foodos-sidebar-backdrop{display:block;position:fixed;inset:0;z-index:50;border:0;background:rgba(0,0,0,.58);backdrop-filter:blur(8px);}}
      `}</style>
    </>
  );
}
