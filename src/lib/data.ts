
import { Customer, Order, Service, DashboardStat } from "@/types";

// Sample Customers
export const customers: Customer[] = [
  {
    id: "c1",
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "555-1234",
    address: "123 Main St, Anytown",
    joinDate: "2023-01-15",
  },
  {
    id: "c2",
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "555-5678",
    address: "456 Oak Ave, Anytown",
    joinDate: "2023-02-20",
  },
  {
    id: "c3",
    name: "Carol Davis",
    email: "carol@example.com",
    phone: "555-9012",
    address: "789 Pine St, Anytown",
    joinDate: "2023-03-10",
  },
  {
    id: "c4",
    name: "David Wilson",
    email: "david@example.com",
    phone: "555-3456",
    address: "101 Maple Dr, Anytown",
    joinDate: "2023-04-05",
  },
  {
    id: "c5",
    name: "Eva Martinez",
    email: "eva@example.com",
    phone: "555-7890",
    address: "202 Cedar Ln, Anytown",
    joinDate: "2023-05-12",
  },
];

// Sample Services
export const services: Service[] = [
  {
    id: "s1",
    name: "Wash & Fold",
    description: "Standard washing and folding service for everyday clothes",
    price: 1.99,
    estimatedTime: "24 hours",
  },
  {
    id: "s2",
    name: "Dry Cleaning",
    description: "Professional dry cleaning for delicate items",
    price: 4.99,
    estimatedTime: "48 hours",
  },
  {
    id: "s3",
    name: "Express Service",
    description: "Same-day service for urgent cleaning needs",
    price: 3.49,
    estimatedTime: "6 hours",
  },
  {
    id: "s4",
    name: "Ironing",
    description: "Professional ironing service for wrinkle-free clothes",
    price: 2.49,
    estimatedTime: "24 hours",
  },
  {
    id: "s5",
    name: "Stain Removal",
    description: "Specialized treatment for tough stains",
    price: 6.99,
    estimatedTime: "72 hours",
  },
];

// Sample Orders
export const orders: Order[] = [
  {
    id: "o1",
    customerId: "c1",
    customerName: "Alice Johnson",
    services: [
      { serviceId: "s1", serviceName: "Wash & Fold", quantity: 10, price: 19.90 },
      { serviceId: "s4", serviceName: "Ironing", quantity: 5, price: 12.45 },
    ],
    status: "completed",
    createdAt: "2023-05-01",
    total: 32.35,
    pickupDate: "2023-05-03",
  },
  {
    id: "o2",
    customerId: "c2",
    customerName: "Bob Smith",
    services: [
      { serviceId: "s2", serviceName: "Dry Cleaning", quantity: 3, price: 14.97 },
    ],
    status: "delivered",
    createdAt: "2023-05-02",
    total: 14.97,
    pickupDate: "2023-05-04",
  },
  {
    id: "o3",
    customerId: "c3",
    customerName: "Carol Davis",
    services: [
      { serviceId: "s3", serviceName: "Express Service", quantity: 8, price: 27.92 },
      { serviceId: "s5", serviceName: "Stain Removal", quantity: 1, price: 6.99 },
    ],
    status: "processing",
    createdAt: "2023-05-05",
    total: 34.91,
  },
  {
    id: "o4",
    customerId: "c4",
    customerName: "David Wilson",
    services: [
      { serviceId: "s1", serviceName: "Wash & Fold", quantity: 15, price: 29.85 },
    ],
    status: "pending",
    createdAt: "2023-05-06",
    total: 29.85,
  },
  {
    id: "o5",
    customerId: "c5",
    customerName: "Eva Martinez",
    services: [
      { serviceId: "s2", serviceName: "Dry Cleaning", quantity: 2, price: 9.98 },
      { serviceId: "s4", serviceName: "Ironing", quantity: 7, price: 17.43 },
    ],
    status: "processing",
    createdAt: "2023-05-07",
    total: 27.41,
  },
];

// Dashboard stats
export const dashboardStats: DashboardStat[] = [
  {
    title: "Total Orders",
    value: 156,
    change: 12,
    icon: "ShoppingBag",
  },
  {
    title: "Total Revenue",
    value: "$4,865.89",
    change: 8.2,
    icon: "DollarSign",
  },
  {
    title: "New Customers",
    value: 24,
    change: -3,
    icon: "Users",
  },
  {
    title: "Pending Orders",
    value: 18,
    change: 5,
    icon: "Clock",
  },
];
