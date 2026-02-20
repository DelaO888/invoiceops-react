import {Outlet, Link} from "react-router-dom";

export default function AppLayOut(){
    return(
        <div className ="min-h-screen bg-zinc-950 text-zinc-50">
            <header className="border-b border-zinc-800">
                <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
                    <Link to={"/"} className="font-semibold tracking-tight">InvoiceOps</Link>
                    <Link to={"/login"} className="text-sm text-zinc-300 hover:text-white">Login</Link>
                </div>
            </header>

        <main className="mx-auto max-w-6xl px-4 py-6">
            <Outlet></Outlet>
        </main>

        </div>
    )
}