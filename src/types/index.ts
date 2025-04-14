
export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  joinDate: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedTime: string;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  services: OrderService[];
  status: 'pending' | 'processing' | 'completed' | 'delivered';
  createdAt: string;
  total: number;
  pickupDate?: string;
}

export interface OrderService {
  serviceId: string;
  serviceName: string;
  quantity: number;
  price: number;
}

export interface DashboardStat {
  title: string;
  value: string | number;
  change: number;
  icon: string;
}
