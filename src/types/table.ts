/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from "react";

export interface TableColumn {
  key: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (value: any, row: any) => React.ReactNode;
}

export interface ActionConfig {
  onView?: (row: any) => void;
  onEdit?: (row: any) => void;
  onDelete?: (row: any) => void;
  onBlock?: (row: any) => void;
  onActivate?: (row: any) => void;
  onAdd?: (row: any) => void;
  onStatusChange?: (row: any, newStatus: string) => void;
  statusOptions?: { value: string; label: string }[];
}

export interface ReusableTableProps {
  columns: TableColumn[];
  data: any[];
  currentPage: number;
  pageLimit: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPageLimitChange: (limit: number) => void;
  actions?: ActionConfig;
}

export interface ActionMenuProps {
  row: any;
  onView?: (row: any) => void;
  onEdit?: (row: any) => void;
  onDelete?: (row: any) => void;
  onBlock?: (row: any) => void;
  onActivate?: (row: any) => void;
  onAdd?: (row: any) => void;
  isLoading?: boolean;
  isDeleting?: boolean;
  isStatusChanging?: boolean;
  isAdding?: boolean;
  isEdditing?: boolean;
  onStatusChange?: (row: any, newStatus: string) => void;
  statusOptions?: { value: string; label: string }[];
}