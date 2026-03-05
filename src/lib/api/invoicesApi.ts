// src/lib/api/invoicesApi.ts
import { mockInvoices } from "./mockInvoices";
import type { Invoice } from "../../features/invoices/types";
import type { InvoiceFormValues } from "../../features/invoices/validation";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getInvoices(): Promise<Invoice[]> {
  // simulamos red / backend
  await sleep(600);
  return mockInvoices;
}

export async function createInvoice(values: InvoiceFormValues): Promise<Invoice>{
  await sleep(400);

const newInvoice: Invoice = {
    id: Date.now().toString(), // suficiente para mock
    number: values.number,
    customerName: values.customerName,
    issueDate: values.issueDate,
    dueDate: values.dueDate,
    amount: values.amount,
    currency: values.currency,
    status: values.status,
}

mockInvoices.unshift(newInvoice)

return newInvoice;

}

export async function updateInvoice(id: string, values: InvoiceFormValues): Promise<Invoice> {

  await sleep(400);

  const idx = mockInvoices.findIndex((x) => x.id === id);
  if(idx === -1) throw new Error("Factura no encontrada");

  const updated: Invoice = {
    ...mockInvoices[idx],
    number: values.number,
    customerName: values.customerName,
    issueDate: values.issueDate,
    dueDate: values.dueDate,
     amount: values.amount,
    currency: values.currency,
    status: values.status,
  }

  mockInvoices[idx] = updated;
  return updated;

}

export async function deleteInvoice(id: string): Promise<{ ok: true }> {
  await sleep(300);

  const idx = mockInvoices.findIndex((x) => x.id === id);
  if (idx === -1) throw new Error("Factura no encontrada");

  mockInvoices.splice(idx, 1);
  return { ok: true };
}