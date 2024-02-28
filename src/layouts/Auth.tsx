import { Outlet } from 'react-router-dom'

export default function NameLayout() {
  return (
    <main>
        <section>
            <h1>Auth Layout</h1>
            <Outlet />
        </section>

        <section>
            
        </section>
    </main>
  )
}