// src/lib/api/invoicesApi.ts
import { mockInvoices } from "./mockInvoices";
import type { Invoice } from "../../features/invoices/types";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getInvoices(): Promise<Invoice[]> {
  // simulamos red / backend
  await sleep(600);
  return mockInvoices;
}