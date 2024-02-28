import { MapPin, Phone, EnvelopeSimple } from '@icons';
import { ReactElement } from 'react';
import roots from './roots.data';

type IconComponent = (props: React.SVGProps<SVGSVGElement>) => ReactElement;

/* Simulacion de como seria cuando traigamos los cursos */
const linksApi = [
    {
        url: 'atencion-al-cliente',
        title: 'Atención al Cliente'
    },
    {
        url: 'ventas',
        title: 'Ventas'
    },
    {
        url: 'finanzas',
        title: 'Finanzas'
    },
]

const footerData = {
    info: [
        {
            icon: MapPin as IconComponent,
            text: 'Calle 123, Ciudad, País',
            url: 'https://maps.app.goo.gl/DWfysC4Rj5scVuhn9'
        },
        {
            icon: Phone as IconComponent,
            text: '+123 456 7890',
            url: 'tel:+1234567890'
        },
        {
            icon: EnvelopeSimple as IconComponent,
            text: 'email@correo.com',
            url: 'mailto:'
        }
    ],
    comunity: {
        title: 'Comunidad',
        links: [
            {
                url: roots.about,
                title: 'Acerca de nosotros'
            },
            {
                url: roots.teachers,
                title: 'Nuestros docentes'
            },
            {
                url: roots.testimonials,
                title: 'Testimonios'
            }
        ]
    },
    courses: {
        title: 'Cursos',
        links: linksApi.map(data => ({
            ...data,
            url: `/${roots.courses}/${data.url}`
        }))
    },
    help: {
        title: 'Ayuda',
        links: [
            {
                url: roots.contact,
                title: 'Contacto'
            },
            {
                url: roots.faq,
                title: 'Preguntas Frecuentes'
            }
        ]
    },
    important: [
        {
            url: roots.terms,
            title: 'Términos y Condiciones'
        },
        {
            url: roots.privacy,
            title: 'Políticas de Privacidad'
        },
        {
            url: roots.complaints,
            title: 'Libro de Reclamaciones'
        }
    ]
}

export default footerData;