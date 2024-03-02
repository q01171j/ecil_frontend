import roots from "./roots.data";

const headerData = {
    index: roots.index,
    links: [
        {
            title: "Nosotros",
            link: roots.about,
        },
        {
            title: "Cursos",
            link: roots.courses,
        },
        {
            title: "Ofertas Laborales",
            link: roots.jobs,
        },
        {
            title: "Convenios",
            link: roots.agreements,
        },
    ],
    register: {
        title: "Registrate",
        link: roots.signUp,
    },
    login: {
        title: "Ingresar",
        link: roots.signIn,
    },
    dashboard: {
        title: "Plataforma",
        link: roots.platform,
    },
};

export default headerData;
