import { Outlet } from "react-router-dom";
import { Logo } from "@assets";
import { Link } from "react-router-dom";

export default function NameLayout() {
    return (
        <main className="grid grid-cols-11">
            <section className="col-span-4 w-full h-full flex items-center justify-center">
                <div className="w-[75%] h-[85%]">
                    <Link to="/">
                        <Logo className="h-10 mb-7" />
                    </Link>
                    <Outlet />
                </div>
            </section>

            <section className="col-span-7 relative w-full h-screen">
                <img src="https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover object-center" />
                <div className='absolute top-0 z-30 left-0 w-full h-full bg-black bg-opacity-60 content ""'></div>
            </section>
        </main>
    );
}
