import { useInvoices } from "../hooks/useInvoices";
import { formatCurrency, formatDate } from "../../../lib/utils/format";

export default function InvoicesPage() {

const {data, isLoading, isError, error} = useInvoices();

const invoices = data ?? [];

const totalAmount = invoices.reduce((acc, inv) => acc + inv.amount, 0);
const totalPending = invoices.filter((inv) => inv.status === "pending").reduce((acc, inv) => acc + inv.amount, 0);





  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Facturas</h1>
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
          <p className="text-xs text-zinc-400">Total Facturas</p>
          <p className="mt-1 text-2xl font-semibold">{invoices.length}</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
          <p className="text-xs text-zinc-400">Monto Total</p>
          <p className="mt-1 text-2xl font-semibold">{formatCurrency(totalAmount, "MXN")}</p>
        </div>
         <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
          <p className="text-xs text-zinc-400">Pendiente de pago</p>
          <p className="mt-1 text-xl font-semibold text-yellow-300">
            {formatCurrency(totalPending, "MXN")}
          </p>
        </div>
      </div>
    </div>

//TABLA DE FACTURAS 

  );
}
