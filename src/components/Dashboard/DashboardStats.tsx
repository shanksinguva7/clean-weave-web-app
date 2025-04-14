
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { DashboardStat } from "@/types";
import { ShoppingBag, DollarSign, Users, Clock } from "lucide-react";

interface DashboardStatsProps {
  stats: DashboardStat[];
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ stats }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShoppingBag":
        return <ShoppingBag className="text-laundry-500" size={24} />;
      case "DollarSign":
        return <DollarSign className="text-green-500" size={24} />;
      case "Users":
        return <Users className="text-purple-500" size={24} />;
      case "Clock":
        return <Clock className="text-orange-500" size={24} />;
      default:
        return <ShoppingBag className="text-laundry-500" size={24} />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-0 shadow-md hover:shadow-lg transition-all">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                <p className={`text-sm mt-1 flex items-center ${stat.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {stat.change >= 0 ? "+" : ""}{stat.change}%
                </p>
              </div>
              <div className="p-3 rounded-full bg-gray-100">{getIcon(stat.icon)}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
