import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../router/AppLayout.tsx";
import LoginPage from "../../features/auth/pages/LoginPage.tsx";
import InvoicesPage from "../../features/invoices/pages/InvoicesPage.tsx";

export const router = createBrowserRouter([
    {path: "/login", element: <LoginPage/>},
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {path: "", element: <InvoicesPage/>}
        ]
    }
])