
import React from "react";
import { Bell, User, Search } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-900 border-b py-3 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-laundry-600">
          Laundry Management
        </h1>
      </div>
      <div className="md:flex hidden items-center relative">
        <Search className="absolute left-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-laundry-500"
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Bell size={20} className="text-gray-600 dark:text-gray-300" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">3</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-2 outline-none">
            <div className="w-8 h-8 rounded-full bg-laundry-200 flex items-center justify-center">
              <User size={18} className="text-laundry-600" />
            </div>
            <span className="hidden md:block text-gray-700 dark:text-gray-200">Admin</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
