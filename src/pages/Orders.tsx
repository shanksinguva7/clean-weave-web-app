
import React from "react";
import { orders } from "@/lib/data";
import OrderList from "@/components/Orders/OrderList";
import Navbar from "@/components/Layout/Navbar";
import Sidebar from "@/components/Layout/Sidebar";

const Orders = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <OrderList orders={orders} />
        </main>
      </div>
    </div>
  );
};

export default Orders;
