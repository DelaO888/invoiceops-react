import {useQuery} from "@tanstack/react-query";
import { getInvoices } from "../../../lib/api/invoicesApi";
import type {Invoice} from "../types";

export function useInvoices(){
    return useQuery<Invoice[]>({
        queryKey: ["invoices"],
        queryFn: getInvoices,
        staleTime: 1000 * 60
    })
}