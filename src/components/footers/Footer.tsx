import { createElement } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '@assets'
import { ContentListItems, LinkItem } from '@components'
import clsx from 'clsx'
import { rootsData, footerData } from '@data'

import { TikTok, Whatsapp, Facebook } from '@icons'

function Footer() {



    return (

        <footer>
            <div>
                <div>
                    <Link to=''>
                        <Logo />
                    </Link>
                    <p>
                        OurVision is to make all peaple <br />
                        the best place to live for them.
                    </p>
                </div>

                <div>
                    <div>
                        <h3>
                            About
                        </h3>

                        <ul>
                            <li>
                                <Link to=''>About Us</Link>
                            </li>
                            <li>
                                <Link to=''>Features</Link>
                            </li>
                            <li>
                                <Link to=''>New & Blog</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3>
                            Company
                        </h3>

                        <ul>
                            <li>
                                <Link to=''>How We Work</Link>
                            </li>
                            <li>
                                <Link to=''>Capital</Link>
                            </li>
                            <li>
                                <Link to=''>Security</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3>
                            Support
                        </h3>

                        <ul>
                            <li>
                                <Link to=''>FAQs</Link>
                            </li>
                            <li>
                                <Link to=''>Support Center</Link>
                            </li>
                            <li>
                                <Link to=''>Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3>
                            Follow Us
                        </h3>

                        <ul>
                            <Link to=''>
                                <Whatsapp />
                            </Link>

                            <Link to=''>
                                <Facebook />
                            </Link>

                            <Link to=''>
                                <TikTok />
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <span>
                    &#169; ECIL. All rights reserved
                </span>

                <div>
                    <Link to=''>
                        Terms & Agreements
                    </Link>

                    <Link to=''>
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>

        /* <footer className={`mt-16 px-20 py-16 grid gap-10 bg-gray-100`}>
            <section className={`flex justify-between`}>

                <div className=''>
                    <Link to={rootsData.index}>
                        <Logo width={80} />
                    </Link>

                    <nav>
                        {
                            footerData.info.map((item, index) => (
                                <LinkItem
                                    key={index}
                                    href={item.url}
                                    className={clsx(
                                        "flex gap-2 items-center my-6 text-lg"
                                    )}
                                >
                                    {createElement(item.icon)}
                                    <span className='text-sm'>{item.text}</span>
                                </LinkItem>
                            ))
                        }
                    </nav>
                </div>


                <ContentListItems
                    data={footerData.comunity}
                    classContainer={clsx("min-w-[131px]")}
                />

                <ContentListItems
                    data={footerData.courses}
                    classContainer={clsx("min-w-[131px]")}
                />

                <ContentListItems
                    data={footerData.help}
                    classContainer={clsx("min-w-[131px]")}
                />

            </section>


            <div className={`w-full h-2 border-t border-black`}></div>


            <section className={`flex justify-between`}>
                <ul className={`flex gap-4`}>
                    <li>
                        <Link to='/terminos-y-condiciones'>Términos y Condiciones</Link>
                    </li>
                    <li className={`text-gray-400`}>/</li>
                    <li>
                        <Link to='/politica-de-privacidad'>Política de Privacidad</Link>
                    </li>
                    <li className={`text-gray-400`}>/</li>
                    <li>
                        <Link to='/libro-de-reclamaciones'>Libro de Reclamaciones</Link>
                    </li>
                </ul>
                <p>Copyright © ECIL 2024 - Todos los derechos reservados</p>
            </section>
        </footer> */
    )
}

export default Footer