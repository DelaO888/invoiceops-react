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

     {/* Tabla */}

     <div className="rounded-2xl border border-zinc-800 bg-zinc-900">
      <div className="border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
        <p className="text-sm text-zinc-300">
          Listado de Facturas
        </p>
        <button className="rounded-xl bg-white/90 text-black px-3 py-1.5 text-sm font-medium hover:bg-white">
          + Nueva Factura
        </button>
      </div>

{isLoading && (<div className="p-4 text-sm text-zinc-400">Cargando Facturas...</div>)}

 {isError && (
          <div className="p-4 text-sm text-red-400">
            Error al cargar facturas: {(error as Error).message}
          </div>
        )}

{!isLoading && !isError && (
  <div className="overflow-x-auto">
    <table className="min-w-full text-sm">
      <thead className="bg-zinc-900/80 border-b border-zinc-800">
        <tr>
            <th className="px-4 py-2 text-left font-medium text-zinc-400">
              Folio
            </th>
             <th className="px-4 py-2 text-left font-medium text-zinc-400">
                    Cliente
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-zinc-400">
                    Emisión
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-zinc-400">
                    Vencimiento
                  </th>
                  <th className="px-4 py-2 text-right font-medium text-zinc-400">
                    Importe
                  </th>
                  <th className="px-4 py-2 text-center font-medium text-zinc-400">
                    Estatus
                  </th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((inv) => (
          <tr key={inv.id} className="border-t border-zinc-800 hover:bg-zinc-800/40">
             <td className="px-4 py-2 font-medium text-zinc-100">
                      {inv.number}
                    </td>
                    <td className="px-4 py-2 text-zinc-200">
                      {inv.customerName}
                    </td>
                    <td className="px-4 py-2 text-zinc-300">
                      {formatDate(inv.issueDate)}
                    </td>
                    <td className="px-4 py-2 text-zinc-300">
                      {formatDate(inv.dueDate)}
                    </td>
                    <td className="px-4 py-2 text-right text-zinc-100">
                      {formatCurrency(inv.amount, inv.currency)}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <StatusBadge status={inv.status} />
                    </td>
          </tr>
        ))}
      </tbody>
    </table>

 {invoices.length === 0 && (
              <div className="p-4 text-sm text-zinc-400">
                No hay facturas por mostrar.
              </div>
            )}


  </div>
)}

     </div>


    </div>





  );
}

type StatusProps = {
  status: "draft" | "pending" | "paid" | "cancelled";
};

function StatusBadge({ status }: StatusProps) {
  const map: Record<StatusProps["status"], { label: string; className: string }> =
    {
      draft: {
        label: "Borrador",
        className: "bg-zinc-700 text-zinc-100",
      },
      pending: {
        label: "Pendiente",
        className: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/40",
      },
      paid: {
        label: "Pagada",
        className: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40",
      },
      cancelled: {
        label: "Cancelada",
        className: "bg-red-500/20 text-red-300 border border-red-500/40",
      },
    };

  const cfg = map[status];

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium ${cfg.className}`}
    >
      {cfg.label}
    </span>
  );
}