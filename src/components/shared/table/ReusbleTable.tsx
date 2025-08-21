/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";

interface TableColumn {
  key: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (value: any, row: any) => React.ReactNode;
}

interface ActionConfig {
  onView?: (row: any) => void;
  onEdit?: (row: any) => void;
  onDelete?: (row: any) => void;
  onBlock?: (row: any) => void;
  onActivate?: (row: any) => void;
  onAdd?: (row: any) => void;
  onStatusChange?: (row: any, newStatus: string) => void;
  statusOptions?: { value: string; label: string }[];
}

interface ReusableTableProps {
  columns: TableColumn[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  currentPage: number;
  pageLimit: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPageLimitChange: (limit: number) => void;
  actions?: ActionConfig;
}

interface ActionMenuProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onView?: (row: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onEdit?: (row: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onDelete?: (row: any) => void;
  onBlock?: (row: any) => void;
  onActivate?: (row: any) => void;
  onAdd?: (row: any) => void;
}

const ActionMenu = ({ 
  row, 
  onView, 
  onEdit, 
  onDelete, 
  onBlock, 
  onActivate, 
  onAdd 
}: ActionMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
        aria-label="Actions"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" 
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-1 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200">
          {onView && (
            <button
              onClick={() => {
                onView(row);
                setIsOpen(false);
              }}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Profile
            </button>
          )}
          
          {onEdit && (
            <button
              onClick={() => {
                onEdit(row);
                setIsOpen(false);
              }}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit
            </button>
          )}
          
          {onAdd && (
            <button
              onClick={() => {
                onAdd(row);
                setIsOpen(false);
              }}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add
            </button>
          )}
          
          {row.status === "active" && onBlock && (
            <button
              onClick={() => {
                onBlock(row);
                setIsOpen(false);
              }}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Block User
            </button>
          )}
          
          {row.status !== "active" && onActivate && (
            <button
              onClick={() => {
                onActivate(row);
                setIsOpen(false);
              }}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Activate User
            </button>
          )}
          
          {onDelete && (
            <button
              onClick={() => {
                onDelete(row);
                setIsOpen(false);
              }}
              className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Delete
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default function ReusableTable({
  columns,
  data,
  currentPage,
  pageLimit,
  totalPages,
  onPageChange,
  onPageLimitChange,
  actions,
}: ReusableTableProps) {
  const [statusChanging, setStatusChanging] = useState<string | null>(null);
  
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

  return (
    <div className="w-full rounded-2xl shadow-sm border border-gray-200 ">
      <div className="overflow-x-auto rounded-2xl">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                >
                  {column.label}
                </th>
              ))}
              {(actions?.onView || actions?.onEdit || actions?.onDelete || 
                actions?.onBlock || actions?.onActivate || actions?.onAdd || 
                actions?.onStatusChange) && (
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
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
                {(actions?.onView || actions?.onEdit || actions?.onDelete || 
                  actions?.onBlock || actions?.onActivate || actions?.onAdd || 
                  actions?.onStatusChange) && (
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      {actions.onStatusChange && actions.statusOptions && (
                        <select
                          value={row.status || ""}
                          onChange={(e) => handleStatusChange(row, e.target.value)}
                          disabled={statusChanging === row.id}
                          className="text-xs py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                          title="Change Status"
                        >
                          {actions.statusOptions.map(option => (
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

      <div className="flex items-center rounded-2xl justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
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
                d="M6.3108 9.68636C6.44934 9.68941 6.58538 9.64925 6.70002 9.5714C6.81465 9.49356 6.90219 9.38188 6.95045 9.25198C6.99871 9.12209 7.0053 8.98041 6.96931 8.8466C6.93331 8.71278 6.85652 8.59356 6.7496 8.50541L2.67018 5.01063L6.7496 1.51707C6.82356 1.46271 6.8855 1.3937 6.93154 1.3143C6.97758 1.2349 7.00673 1.14682 7.01716 1.05563C7.0276 0.964435 7.01909 0.872091 6.99217 0.784341C6.96525 0.69659 6.92051 0.615317 6.86074 0.54566C6.80097 0.476003 6.72746 0.419499 6.64482 0.379567C6.56217 0.339636 6.47217 0.317207 6.38046 0.313668C6.28874 0.31013 6.19728 0.325515 6.1118 0.35896C6.02633 0.392405 5.94868 0.443137 5.88372 0.507981L1.21315 4.50412C1.1398 4.56671 1.0809 4.6444 1.04052 4.73196C1.00013 4.81952 0.979218 4.91482 0.979218 5.01124C0.979218 5.10767 1.00013 5.20297 1.04052 5.29052C1.0809 5.37808 1.1398 5.45585 1.21315 5.51844L5.88372 9.51842C6.0017 9.62322 6.15304 9.68265 6.3108 9.68636Z"
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
                d="M5.6892 3.31364C5.55066 3.31059 5.41462 3.35075 5.29998 3.4286C5.18535 3.50644 5.09781 3.61812 5.04955 3.74802C5.00129 3.87791 4.9947 4.01959 5.03069 4.1534C5.06669 4.28722 5.14348 4.40644 5.2504 4.49459L9.32982 7.98937L5.2504 11.4829C5.17644 11.5373 5.1145 11.6063 5.06846 11.6857C5.02242 11.7651 4.99327 11.8532 4.98284 11.9444C4.9724 12.0356 4.98091 12.1279 5.00783 12.2157C5.03474 12.3034 5.07949 12.3847 5.13926 12.4543C5.19903 12.524 5.27254 12.5805 5.35518 12.6204C5.43783 12.6604 5.52783 12.6828 5.61954 12.6863C5.71126 12.6899 5.80272 12.6745 5.8882 12.641C5.97367 12.6076 6.05132 12.5569 6.11628 12.492L10.7869 8.49588C10.8602 8.43329 10.9191 8.3556 10.9595 8.26804C10.9999 8.18048 11.0208 8.08518 11.0208 7.98876C11.0208 7.89233 10.9999 7.79703 10.9595 7.70948C10.9191 7.62192 10.8602 7.54415 10.7869 7.48156L6.11628 3.48158C5.9983 3.37678 5.84696 3.31735 5.6892 3.31364Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}