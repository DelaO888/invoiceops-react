import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateInvoice } from "../../../lib/api/invoicesApi";
import type { InvoiceFormValues } from "../validation";


export function useUpdateInvoice(){
    const qc = useQueryClient();

    return useMutation({
        mutationFn: (params: {id: string; values: InvoiceFormValues}) => updateInvoice(params.id, params.values),
        onSuccess: () => {
            qc.invalidateQueries({queryKey: ["invoices"]})
        }
    })
}