
import React from "react";
import { services } from "@/lib/data";
import ServiceList from "@/components/Services/ServiceList";
import Navbar from "@/components/Layout/Navbar";
import Sidebar from "@/components/Layout/Sidebar";

const Services = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <ServiceList services={services} />
        </main>
      </div>
    </div>
  );
};

export default Services;
