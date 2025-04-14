
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  ShoppingBag,
  Users,
  Clipboard,
  Settings,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: Home, path: "/" },
  { name: "Orders", icon: ShoppingBag, path: "/orders" },
  { name: "Customers", icon: Users, path: "/customers" },
  { name: "Services", icon: Clipboard, path: "/services" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`bg-white dark:bg-slate-900 h-screen transition-all duration-300 ${collapsed ? "w-16" : "w-64"} border-r`}>
      <div className="flex justify-end p-4">
        <button onClick={toggleSidebar} className="p-1 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md">
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>
      <div className="mt-6 px-3">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center space-x-2 p-3 rounded-lg mb-2 transition-colors ${
              location.pathname === item.path
                ? "bg-laundry-500 text-white"
                : "hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-200"
            }`}
          >
            <item.icon size={20} />
            {!collapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
