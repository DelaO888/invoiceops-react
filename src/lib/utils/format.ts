import type {Invoice} from "../../features/invoices/types";

export function formatCurrency(
    value: number,
    currency: Invoice["currency"] = "MXN"
){
    return new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency,
    }).format(value);
}

export function formatDate(date: string){
    return new Intl.DateTimeFormat("es-MX", {
        year: "numeric",
        month: "short",
        day: "2-digit",
    }).format(new Date(date));
}