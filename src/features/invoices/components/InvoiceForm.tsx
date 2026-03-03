// src/features/invoices/components/InvoiceForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  invoiceFormSchema,
  type InvoiceFormValues,
} from "../validation";

type InvoiceFormProps = {
  mode?: "create" | "edit";
  defaultValues?: Partial<InvoiceFormValues>;
  onSubmit: (values: InvoiceFormValues) => Promise<void> | void;
  onCancel: () => void;
  isSubmitting?: boolean;
};

export default function InvoiceForm({
  mode = "create",
  defaultValues,
  onSubmit,
  onCancel,
  isSubmitting,
}: InvoiceFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceFormSchema),
    defaultValues: {
      number: "",
      customerName: "",
      issueDate: new Date().toISOString().slice(0, 10), // hoy
      dueDate: new Date().toISOString().slice(0, 10),
      amount: 0,
      currency: "MXN",
      status: "draft",
      ...defaultValues,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="text-xs font-medium text-zinc-300">
            Folio
          </label>
          <input
            type="text"
            {...register("number")}
            className="mt-1 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-zinc-400"
          />
          {errors.number && (
            <p className="mt-1 text-xs text-red-400">
              {errors.number.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-xs font-medium text-zinc-300">
            Cliente
          </label>
          <input
            type="text"
            {...register("customerName")}
            className="mt-1 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-zinc-400"
          />
          {errors.customerName && (
            <p className="mt-1 text-xs text-red-400">
              {errors.customerName.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="text-xs font-medium text-zinc-300">
            Fecha de emisión
          </label>
          <input
            type="date"
            {...register("issueDate")}
            className="mt-1 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-zinc-400"
          />
          {errors.issueDate && (
            <p className="mt-1 text-xs text-red-400">
              {errors.issueDate.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-xs font-medium text-zinc-300">
            Fecha de vencimiento
          </label>
          <input
            type="date"
            {...register("dueDate")}
            className="mt-1 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-zinc-400"
          />
          {errors.dueDate && (
            <p className="mt-1 text-xs text-red-400">
              {errors.dueDate.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <div>
          <label className="text-xs font-medium text-zinc-300">
            Importe
          </label>
          <input
            type="number"
            step="0.01"
            {...register("amount")}
            className="mt-1 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-zinc-400"
          />
          {errors.amount && (
            <p className="mt-1 text-xs text-red-400">
              {errors.amount.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-xs font-medium text-zinc-300">
            Moneda
          </label>
          <select
            {...register("currency")}
            className="mt-1 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-zinc-400"
          >
            <option value="MXN">MXN</option>
            <option value="USD">USD</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-medium text-zinc-300">
            Estatus
          </label>
          <select
            {...register("status")}
            className="mt-1 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-zinc-400"
          >
            <option value="draft">Borrador</option>
            <option value="pending">Pendiente</option>
            <option value="paid">Pagada</option>
            <option value="cancelled">Cancelada</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border border-zinc-700 px-3 py-1.5 text-sm text-zinc-200 hover:bg-zinc-800"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl bg-white text-black px-4 py-1.5 text-sm font-medium disabled:opacity-70"
        >
          {isSubmitting
            ? "Guardando..."
            : mode === "create"
            ? "Crear factura"
            : "Guardar cambios"}
        </button>
      </div>
    </form>
  );
}