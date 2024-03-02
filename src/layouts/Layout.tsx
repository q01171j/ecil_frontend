import { Header, Footer } from "@components"
import { Outlet } from "react-router-dom"


function Layout() {
    return (
        <main>
            <Header />

            <div className="mt-16 px-14 grid gap-20">
                <Outlet />
            </div>

            <Footer />
        </main>
    )
}

export default Layout