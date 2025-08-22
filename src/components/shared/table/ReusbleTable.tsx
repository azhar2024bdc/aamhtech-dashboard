"use client";

import { ReusableTableProps } from "@/types/table";
import { useState, useEffect } from "react";
import ActionMenu from "./ActionMenue";

// import Aos from "aos";
import "aos/dist/aos.css";

const ReusableTable = ({
  columns,
  data,
  currentPage,
  pageLimit,
  totalPages,
  onPageChange,
  onPageLimitChange,
  actions,
  isLoading = false,
}: ReusableTableProps & { isLoading?: boolean }) => {
  const [statusChanging, setStatusChanging] = useState<string | null>(null);

useEffect(() => {
  if (typeof window !== "undefined") {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 600,
        easing: "ease-in-out",
        once: true,
      });
      AOS.refresh(); // 👈 force refresh after mount
    });
  }
}, [data]); // 👈 run again when data changes


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleStatusChange = async (row: any, newStatus: string) => {
    if (actions?.onStatusChange) {
      setStatusChanging(row.id);
      try {
        await actions.onStatusChange(row, newStatus);
      } catch (error) {
        console.error("Status change failed:", error);
      }
      setStatusChanging(null);
    }
  };

  const renderPaginationNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`size-8 flex items-center justify-center text-sm font-medium rounded-md transition-colors ${
            i === currentPage
              ? "bg-teal-500 text-white"
              : "text-gray-700 hover:bg-gray-100 border border-gray-300"
          }`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  // Skeleton loading component
  const TableSkeleton = () => {
    return (
      <div className="w-full rounded-2xl shadow-sm border border-gray-200 animate-pulse overflow-hidden">
        <div className="overflow-x-auto rounded-2xl">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </th>
                ))}
                {(actions?.onView ||
                  actions?.onEdit ||
                  actions?.onDelete ||
                  actions?.onBlock ||
                  actions?.onActivate ||
                  actions?.onAdd ||
                  actions?.onStatusChange) && (
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Array.from({ length: pageLimit }).map((_, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="px-6 py-4 text-sm text-gray-700"
                    >
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                    </td>
                  ))}
                  {(actions?.onView ||
                    actions?.onEdit ||
                    actions?.onDelete ||
                    actions?.onBlock ||
                    actions?.onActivate ||
                    actions?.onAdd ||
                    actions?.onStatusChange) && (
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <div className="h-8 bg-gray-200 rounded w-20"></div>
                        <div className="h-8 bg-gray-200 rounded w-8"></div>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center rounded-b-2xl justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center gap-2">
            <div className="h-4 bg-gray-300 rounded w-16"></div>
            <div className="h-10 bg-gray-300 rounded w-20"></div>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-8 bg-gray-300 rounded w-8"></div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-8 bg-gray-300 rounded w-8"></div>
            ))}
            <div className="h-8 bg-gray-300 rounded w-8"></div>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <TableSkeleton />;
  }

  return (
    <div className="w-full rounded-2xl shadow-sm border border-gray-200">
      <div className="overflow-x-auto rounded-2xl">
        <table className="w-full">
          <thead>
            <tr
              data-aos="fade-in-out"
              className="border-b border-gray-200 bg-gray-50"
            >
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                >
                  {column.label}
                </th>
              ))}
              {(actions?.onView ||
                actions?.onEdit ||
                actions?.onDelete ||
                actions?.onBlock ||
                actions?.onActivate ||
                actions?.onAdd ||
                actions?.onStatusChange) && (
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors"
                data-aos="fade-in-out"
                data-aos-delay={index * 50}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-6 py-4 text-sm text-gray-700"
                  >
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]}
                  </td>
                ))}
                {(actions?.onView ||
                  actions?.onEdit ||
                  actions?.onDelete ||
                  actions?.onBlock ||
                  actions?.onActivate ||
                  actions?.onAdd ||
                  actions?.onStatusChange) && (
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      {actions.onStatusChange && actions.statusOptions && (
                        <select
                          value={row.status || ""}
                          onChange={(e) =>
                            handleStatusChange(row, e.target.value)
                          }
                          disabled={statusChanging === row.id}
                          className="text-xs py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                          title="Change Status"
                        >
                          {actions.statusOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      )}

                      <ActionMenu
                        row={row}
                        onView={actions.onView}
                        onEdit={actions.onEdit}
                        onDelete={actions.onDelete}
                        onBlock={actions.onBlock}
                        onActivate={actions.onActivate}
                        onAdd={actions.onAdd}
                      />
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center rounded-b-2xl justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">Entries</span>
          <div className="relative">
            <select
              value={pageLimit}
              onChange={(e) => onPageLimitChange(Number(e.target.value))}
              className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 cursor-pointer"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="size-8 flex items-center justify-center text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="10"
              viewBox="0 0 8 10"
              fill="none"
            >
              <path
                d="M6.3108 9.68636C6.44934 9.68941 6.58538 9.64925 6.70002 9.5714C6.81465 9.49356 6.90219 9.38188 6.95045 9.25198C6.99871 9.12209 7.0053 8.98041 6.96931 8.8466C6.93331 8.71278 6.85652 8.59356 6.7496 8.50541L2.67018 5.01063L6.7496 1.51707C6.82356 1.46271 6.8855 1.3937 6.93154 1.3143C6.97758 1.2349 7.00673 1.14682 7.01716 1.05563C7.02760 0.964435 7.01909 0.872091 6.99217 0.784341C6.96525 0.69659 6.92051 0.615317 6.86074 0.54566C6.80097 0.476003 6.72746 0.419499 6.64482 0.379567C6.56217 0.339636 6.47217 0.317207 6.38046 0.313668C6.28874 0.31013 6.19728 0.325515 6.11180 0.35896C6.02633 0.392405 5.94868 0.443137 5.88372 0.507981L1.21315 4.50412C1.13980 4.56671 1.08090 4.64440 1.04052 4.73196C1.00013 4.81952 0.979218 4.91482 0.979218 5.01124C0.979218 5.10767 1.00013 5.20297 1.04052 5.29052C1.08090 5.37808 1.13980 5.45585 1.21315 5.51844L5.88372 9.51842C6.00170 9.62322 6.15304 9.68265 6.31080 9.68636Z"
                fill="black"
              />
            </svg>
          </button>

          {renderPaginationNumbers()}

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="size-8 flex items-center justify-center text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.6892 3.31364C5.55066 3.31059 5.41462 3.35075 5.29998 3.4286C5.18535 3.50644 5.09781 3.61812 5.04955 3.74802C5.00129 3.87791 4.9947 4.01959 5.03069 4.1534C5.06669 4.28722 5.14348 4.40644 5.2504 4.49459L9.32982 7.98937L5.2504 11.4829C5.17644 11.5373 5.1145 11.6063 5.06846 11.6857C5.02242 11.7651 4.99327 11.8532 4.98284 11.9444C4.97240 12.0356 4.98091 12.1279 5.00783 12.2157C5.03474 12.3034 5.07949 12.3847 5.13926 12.4543C5.19903 12.524 5.27254 12.5805 5.35518 12.6204C5.43783 12.6604 5.52783 12.6828 5.61954 12.6863C5.71126 12.6899 5.80272 12.6745 5.88820 12.641C5.97367 12.6076 6.05132 12.5569 6.11628 12.492L10.7869 8.49588C10.8602 8.43329 10.9191 8.35560 10.9595 8.26804C10.9999 8.18048 11.0208 8.08518 11.0208 7.98876C11.0208 7.89233 10.9999 7.79703 10.9595 7.70948C10.9191 7.62192 10.8602 7.54415 10.7869 7.48156L6.11628 3.48158C5.99830 3.37678 5.84696 3.31735 5.68920 3.31364Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReusableTable;
