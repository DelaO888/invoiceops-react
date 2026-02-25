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