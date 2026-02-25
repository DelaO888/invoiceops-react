import {z} from "zod";
import type { InvoiceStatus } from "./types";

export const invoiceFormSchema = z.object({
    number: z.string().min(1, "El folio es obligatorio"),
    customerName: z.string().min(1, "El cliente es obligatorio"),
    issueDate: z.string().min(1, "La fecha de emisión es obligatoria"),
    dueDate: z.string().min(1, "La fecha de vencimiento es obligatoria"),
    amount: z.coerce.number().positive("El importe debe ser mayor a 0"),
    currency: z.enum(["MXN", "USD"]),
    status: z.custom<InvoiceStatus>().default("draft"),
});

export type InvoiceFormValues = z.infer<typeof invoiceFormSchema>;