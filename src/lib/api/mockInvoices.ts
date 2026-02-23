// src/lib/api/mockInvoices.ts
// src/lib/api/mockInvoices.ts
import type { Invoice } from "../../features/invoices/types";

export const mockInvoices: Invoice[] = [
  {
    id: "1",
    number: "F-2026-001",
    customerName: "Grupo Daisa",
    issueDate: "2026-02-01",
    dueDate: "2026-02-15",
    amount: 12500,
    currency: "MXN",
    status: "paid",
  },
  {
    id: "2",
    number: "F-2026-002",
    customerName: "Ingenieros Militares",
    issueDate: "2026-02-05",
    dueDate: "2026-02-20",
    amount: 9800,
    currency: "MXN",
    status: "pending",
  },
  {
    id: "3",
    number: "F-2026-003",
    customerName: "Cliente Demo S.A. de C.V.",
    issueDate: "2026-02-10",
    dueDate: "2026-02-25",
    amount: 15500,
    currency: "MXN",
    status: "draft",
  },
  {
    id: "4",
    number: "F-2026-004",
    customerName: "Acme Corp",
    issueDate: "2026-01-28",
    dueDate: "2026-02-10",
    amount: 4200,
    currency: "USD",
    status: "cancelled",
  },
];