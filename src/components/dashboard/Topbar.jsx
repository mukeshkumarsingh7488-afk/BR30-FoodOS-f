import { Menu, Bell, Search, Store, ChevronDown } from "lucide-react";

export default function Topbar({ onMenuClick, title, subtitle }) {
  return (
    <>
      <header className="foodos-topbar">
        <div className="foodos-topbar-left">
          <button className="foodos-menu-btn" onClick={onMenuClick} aria-label="Open dashboard menu">
            <Menu size={22} />
          </button>

          <div>
            <p className="foodos-eyebrow">Business Workspace</p>
            <h1>{title}</h1>
            <span>{subtitle}</span>
          </div>
        </div>

        <div className="foodos-topbar-right">
          <label className="foodos-search">
            <Search size={18} />
            <input type="search" placeholder="Search orders, menu, staff..." />
          </label>

          <button className="foodos-icon-btn" aria-label="Notifications">
            <Bell size={19} />
            <i />
          </button>

          <button className="foodos-business-switch">
            <span>
              <Store size={18} />
            </span>
            <div>
              <strong>BR30 Restaurant</strong>
              <small>Owner Console</small>
            </div>
            <ChevronDown size={17} />
          </button>
        </div>
      </header>

      <style>{`
        .foodos-topbar{position:sticky;top:0;z-index:35;min-height:92px;padding:18px 28px;background:rgba(2,8,5,.78);backdrop-filter:blur(22px);border-bottom:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:space-between;gap:22px;}
        .foodos-topbar-left{display:flex;align-items:center;gap:15px;min-width:0;}
        .foodos-menu-btn{display:none;width:44px;height:44px;border:1px solid rgba(255,255,255,.1);border-radius:14px;background:rgba(255,255,255,.055);color:#fff;align-items:center;justify-content:center;cursor:pointer;}
        .foodos-eyebrow{margin:0 0 5px;color:#00ff88;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:.12em;}
        .foodos-topbar h1{margin:0;font-size:25px;line-height:1.15;font-weight:950;letter-spacing:-.04em;color:#fff;}
        .foodos-topbar span{display:block;margin-top:5px;color:rgba(244,255,248,.58);font-size:13px;line-height:1.4;}
        .foodos-topbar-right{display:flex;align-items:center;gap:12px;}
        .foodos-search{width:310px;height:46px;padding:0 14px;border-radius:16px;background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.09);display:flex;align-items:center;gap:10px;color:rgba(244,255,248,.54);}
        .foodos-search input{width:100%;border:0;outline:0;background:transparent;color:#fff;font-size:13px;font-weight:700;}
        .foodos-search input::placeholder{color:rgba(244,255,248,.42);}
        .foodos-icon-btn{position:relative;width:46px;height:46px;border-radius:16px;border:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.055);color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;}
        .foodos-icon-btn i{position:absolute;right:13px;top:12px;width:8px;height:8px;border-radius:99px;background:#00ff88;box-shadow:0 0 18px rgba(0,255,136,.85);}
        .foodos-business-switch{height:48px;padding:0 12px;border-radius:17px;border:1px solid rgba(0,255,136,.18);background:rgba(0,255,136,.07);color:#fff;display:flex;align-items:center;gap:10px;cursor:pointer;}
        .foodos-business-switch span{width:34px;height:34px;border-radius:12px;background:rgba(0,255,136,.14);display:flex;align-items:center;justify-content:center;color:#00ff88;margin:0;}
        .foodos-business-switch div{text-align:left;}
        .foodos-business-switch strong{display:block;font-size:13px;font-weight:950;line-height:1.1;}
        .foodos-business-switch small{display:block;margin-top:4px;color:rgba(244,255,248,.55);font-size:11px;font-weight:700;}
        @media(max-width:1180px){.foodos-search{display:none;}}
        @media(max-width:1024px){.foodos-topbar{padding:16px;min-height:82px}.foodos-menu-btn{display:flex}.foodos-topbar h1{font-size:21px}.foodos-topbar span{font-size:12px}.foodos-business-switch{display:none;}}
        @media(max-width:560px){.foodos-icon-btn{display:none}.foodos-eyebrow{font-size:10px}.foodos-topbar h1{font-size:19px;}}
      `}</style>
    </>
  );
}
