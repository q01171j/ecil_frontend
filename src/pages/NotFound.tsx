import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-[#3b8aac]">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Página no encontrada
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600">
                    Lo sentimos, no pudimos encontrar la página que buscas.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to="/"
                        className="rounded-md bg-[#3b8aac] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#224e61] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Volver al inicio
                    </Link>
                    <Link to="/" className="text-sm font-semibold text-gray-900">
                        Contactar soporte <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default NotFound;
