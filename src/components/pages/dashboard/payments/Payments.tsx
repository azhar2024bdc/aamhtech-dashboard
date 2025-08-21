



"use client";

import ReusableTable from "@/components/shared/table/ReusbleTable";
import { useState } from "react";

const sampleData = [
  {
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
  },
  {
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
  },
  {
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
  },
  {
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
  },
  {
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
  },
  {
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
  },
  {
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
  },
  {
    date: "18 Feb, 2025",
    userName: "Alex John",
    amount: "50 MAD",
    coinAmount: "200",
  },
  {
    date: "18 Feb, 2025",
    userName: "Sarah Wilson",
    amount: "75 MAD",
    coinAmount: "300",
  },
  {
    date: "17 Feb, 2025",
    userName: "Mike Johnson",
    amount: "100 MAD",
    coinAmount: "400",
  },
  {
    date: "17 Feb, 2025",
    userName: "Emma Davis",
    amount: "25 MAD",
    coinAmount: "100",
  },
  {
    date: "16 Feb, 2025",
    userName: "John Smith",
    amount: "150 MAD",
    coinAmount: "600",
  },
];

const columns = [
  { key: "date", label: "Date" },
  { key: "userName", label: "User name" },
  { key: "amount", label: "Amount" },
  { key: "coinAmount", label: "Coin amount" },
];

export default function Payments() {
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
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Transaction History
        </h1>

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
