import {
    AgreementOne,
    AgreementTwo,
    AgreementThree,
    AgreementFour,
} from "@assets";
import rootsData from "./roots.data";

const indexData = {
    hero: {
        span: "EXPLORA NUEVAS OPORTUNIDADES",
        h1: "Encuentra Tu Primer Trabajo Ya!",
        p: "Descubre cómo nuestra plataforma te prepara para entrar al mundo laboral.",
        btnOne: {
            href: rootsData.signUp,
            text: "Comienza Ahora",
        },
        btnTwo: {
            href: rootsData.about,
            text: "Más información",
        },
        modal: {
            h3: "Encuentra Tu Primer Trabajo Ya!",
            placeholderOne: "Departamento",
            placeholderTwo: "Provincia",
            placeholderThree: "Distrito",
            btn: "Buscar",
        },
    },
    agreements: [
        {
            img: AgreementOne,
            alt: "Convenio 1",
        },
        {
            img: AgreementTwo,
            alt: "Convenio 2",
        },
        {
            img: AgreementThree,
            alt: "Convenio 3",
        },
        {
            img: AgreementFour,
            alt: "Convenio 4",
        },
    ],
};

export default indexData;
