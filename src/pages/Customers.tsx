
import React from "react";
import { customers } from "@/lib/data";
import CustomerList from "@/components/Customers/CustomerList";
import Navbar from "@/components/Layout/Navbar";
import Sidebar from "@/components/Layout/Sidebar";

const Customers = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <CustomerList customers={customers} />
        </main>
      </div>
    </div>
  );
};

export default Customers;
