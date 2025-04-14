
import React from "react";
import { dashboardStats, orders } from "@/lib/data";
import DashboardStats from "@/components/Dashboard/DashboardStats";
import RecentOrders from "@/components/Dashboard/RecentOrders";
import Navbar from "@/components/Layout/Navbar";
import Sidebar from "@/components/Layout/Sidebar";

const Index = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-1">Dashboard</h2>
            <p className="text-gray-500">Welcome to your laundry management dashboard</p>
          </div>
          
          <div className="mb-8">
            <DashboardStats stats={dashboardStats} />
          </div>
          
          <div className="mb-6">
            <RecentOrders orders={orders} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
