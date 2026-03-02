import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
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
} : InvoiceFormProps){
    const {
        register, 
        handleSubmit,
        formState: {errors},
    } = useForm<InvoiceFormValues>({
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
    })

return(
    <form action=""></form>
);

}