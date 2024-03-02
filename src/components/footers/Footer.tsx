import { createElement } from "react";
import { Link } from "react-router-dom";
import { Logo } from "@assets";
import { ContentListOne, LinkItemOne } from "@components";
import clsx from "clsx";
import { footerData } from "@data";

function Footer() {
    return (
        <footer className={`mt-16 px-16 py-16 grid gap-10 bg-gray-100`}>
            <section className={`flex justify-between`}>
                <div className="">
                    <Link to={footerData.index}>
                        <Logo width={80} />
                    </Link>

                    <nav>
                        {footerData.info.map((item, index) => (
                            <LinkItemOne
                                key={index}
                                href={item.url}
                                className={clsx(
                                    "flex gap-2 items-center my-6 text-lg"
                                )}
                            >
                                {createElement(item.icon)}
                                <span className="text-sm">{item.text}</span>
                            </LinkItemOne>
                        ))}
                    </nav>
                </div>

                <ContentListOne
                    data={footerData.comunity}
                    classContainer={clsx("min-w-[131px]")}
                />

                <ContentListOne
                    data={footerData.courses}
                    classContainer={clsx("min-w-[131px]")}
                />

                <ContentListOne
                    data={footerData.help}
                    classContainer={clsx("min-w-[131px]")}
                />
            </section>

            <div className={`w-full h-2 border-t border-black`}></div>

            <section className={`flex justify-between`}>
                <ul className={`flex gap-4`}>
                    <li>
                        <Link to="/terminos-y-condiciones">
                            Términos y Condiciones
                        </Link>
                    </li>
                    <li className={`text-gray-400`}>/</li>
                    <li>
                        <Link to="/politica-de-privacidad">
                            Política de Privacidad
                        </Link>
                    </li>
                    <li className={`text-gray-400`}>/</li>
                    <li>
                        <Link to="/libro-de-reclamaciones">
                            Libro de Reclamaciones
                        </Link>
                    </li>
                </ul>
                <p>Copyright © ECIL 2024 - Todos los derechos reservados</p>
            </section>
        </footer>
    );
}

export default Footer;
