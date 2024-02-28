import Children from "@/interfaces/children/Children"
import { Header, Footer } from "@components"

interface LayoutProps extends Children {

}

function Layout({ children }: LayoutProps) {
    return (
        <main>
            <Header />

            <div className="mt-16">
                {children}
            </div>

            <Footer />
        </main>
    )
}

export default Layout