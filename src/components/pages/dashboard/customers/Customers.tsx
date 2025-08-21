"use client";

import ReusableTable from "@/components/shared/table/ReusbleTable";
import { useRouter } from "next/navigation";
import { useState } from "react";


interface Customer {
  id: string;
  date: string;
  userName: string;
  amount: string;
  coinAmount: string;
  status: string;
}

const sampleData = [
  {
    id: "1",
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
    status: "active"
  },
  {
    id: "2",
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
    status: "pending"
  },
  {
    id: "3",
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
    status: "inactive"
  },
  {
    id: "4",
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
    status: "active"
  },
  {
    id: "5",
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
    status: "pending"
  },
  {
    id: "6",
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
    status: "active"
  },
  {
    id: "7",
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
    status: "inactive"
  },
  {
    id: "8",
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
    status: "active"
  },
  {
    id: "9",
    date: "18 Feb, 2025",
    userName: "Sarah Wilson",
    amount: "75 MAD",
    coinAmount: "300",
    status: "pending"
  },
  {
    id: "10",
    date: "17 Feb, 2025",
    userName: "Mike Johnson",
    amount: "100 MAD",
    coinAmount: "400",
    status: "active"
  },
  {
    id: "11",
    date: "17 Feb, 2025",
    userName: "Emma Davis",
    amount: "25 MAD",
    coinAmount: "100",
    status: "inactive"
  },
  {
    id: "12",
    date: "16 Feb, 2025",
    userName: "John Smith",
    amount: "150 MAD",
    coinAmount: "600",
    status: "active"
  },
];

const columns = [
  { key: "date", label: "Date" },
  { key: "userName", label: "User name" },
  { key: "amount", label: "Amount" },
  { key: "coinAmount", label: "Coin amount" },
  { 
    key: "status", 
    label: "Status",
    render: (value: string) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        value === "active" 
          ? "bg-green-100 text-green-800" 
          : value === "pending" 
          ? "bg-yellow-100 text-yellow-800" 
          : "bg-red-100 text-red-800"
      }`}>
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </span>
    )
  },
];

// Status options for the dropdown
const statusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "pending", label: "Pending" }
];

export default function Customers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [data, setData] = useState(sampleData); // Use state for data to allow updates

  const totalPages = Math.ceil(data.length / pageLimit);
  const startIndex = (currentPage - 1) * pageLimit;
  const endIndex = startIndex + pageLimit;
  const currentData = data.slice(startIndex, endIndex);
  const router = useRouter();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageLimitChange = (limit: number) => {
    setPageLimit(limit);
    setCurrentPage(1);
  };

  const handleView = (row: Customer) => {
    console.log("View details:", row);
    // Navigate to customer details page with the ID
    router.push(`/customers/${row.id}`);
  };

  const handleStatusChange = (row: Customer, newStatus: string) => {
    console.log("Status change:", row.id, newStatus);
    
    // Update the status in the local state (in a real app, you would call an API)
    setData(prevData => 
      prevData.map(item => 
        item.id === row.id ? { ...item, status: newStatus } : item
      )
    );

  };

  const actions = {
    onView: handleView,
    onStatusChange: handleStatusChange,
    statusOptions: statusOptions
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Customers
        </h1>

        <ReusableTable
          columns={columns}
          data={currentData}
          currentPage={currentPage}
          pageLimit={pageLimit}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          onPageLimitChange={handlePageLimitChange}
          actions={actions}
        />
      </div>
    </div>
  );
}