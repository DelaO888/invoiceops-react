import {useMutation, useQueryClient} from "@tanstack/react-query";
import { createInvoice } from "../../../lib/api/invoicesApi";
import type { InvoiceFormValues } from "../validation";

export function useCreateInvoice(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (values: InvoiceFormValues) => createInvoice(values),
        onSuccess: () => {
            //refrescar la lista de facturas
            queryClient.invalidateQueries({queryKey: ["invoices"]})
        }
    })
}