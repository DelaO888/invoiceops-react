export type InvoiceStatus = 'draft' | 'pending' | 'paid'| 'cancelled';

export interface Invoice {
    id: string;
    number: string;
    customerName: string;
    issueDate: string;
    dueDate: string;
    amount: number;
    currency: "MXN" | "USD"
    status: InvoiceStatus;
}