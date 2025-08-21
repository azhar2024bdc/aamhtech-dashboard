"use client";

import ReusableTable from "@/components/shared/table/ReusbleTable";

import { useState } from "react";

const sampleData = [
  {
    id: "1",
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
    status: "active",
  },
  {
    id: "2",
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
    status: "pending",
  },
  {
    id: "3",
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
    status: "inactive",
  },
  {
    id: "4",
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
    status: "active",
  },
  {
    id: "5",
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
    status: "pending",
  },
  {
    id: "6",
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
    status: "active",
  },
  {
    id: "7",
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
    status: "inactive",
  },
  {
    id: "8",
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
    status: "active",
  },
  {
    id: "9",
    date: "18 Feb, 2025",
    userName: "Sarah Wilson",
    amount: "75 MAD",
    coinAmount: "300",
    status: "pending",
  },
  {
    id: "10",
    date: "17 Feb, 2025",
    userName: "Mike Johnson",
    amount: "100 MAD",
    coinAmount: "400",
    status: "active",
  },
  {
    id: "11",
    date: "17 Feb, 2025",
    userName: "Emma Davis",
    amount: "25 MAD",
    coinAmount: "100",
    status: "inactive",
  },
  {
    id: "12",
    date: "16 Feb, 2025",
    userName: "John Smith",
    amount: "150 MAD",
    coinAmount: "600",
    status: "active",
  },
];

const columns = [
  { key: "date", label: "Date" },
  { key: "userName", label: "User name" },
  { key: "amount", label: "Amount" },
  { key: "coinAmount", label: "Coin amount" },
];



export default function Complain() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);

  const totalPages = Math.ceil(sampleData.length / pageLimit);
  const startIndex = (currentPage - 1) * pageLimit;
  const endIndex = startIndex + pageLimit;
  const currentData = sampleData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageLimitChange = (limit: number) => {
    setPageLimit(limit);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">All sellers</h1>

        <ReusableTable
          columns={columns}
          data={currentData}
          currentPage={currentPage}
          pageLimit={pageLimit}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          onPageLimitChange={handlePageLimitChange}
        />
      </div>
    </div>
  );
}
