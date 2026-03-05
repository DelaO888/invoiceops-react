import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteInvoice } from "../../../lib/api/invoicesApi";

export function useDeleteInvoice() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteInvoice(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["invoices"] });
    },
  });
}