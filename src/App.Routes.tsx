/* Imports -> REACT-ROUTER-DOM AND REACT*/
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

/* Imports -> PAGES OR ROUTES */
import {
    Index,
    About,
    Courses,
    Course,
    Jobs,
    Job,
    Teachers,
    Teacher,
    Privacity,
    Terms,
    Complaints,
    Faq,
    Testimonials,
    SignIn,
    SignUp,
    NotFound,
    SignUpCode,
    SignUpPhoto,
    SignUpTypeUser,
    SignUpData,
} from "@routes";

/* Imports -> LAYOUTS */
import { Layout, Auth } from "@layouts";

/* Imports -> COMPONENTS */
import { Protected } from "@components";

/* Imports -> DATA ROOTS */
import { rootsData } from "@data";

/* Imports -> REDUX */
import { useDispatch } from "react-redux";
//import { scrollYSlice } from "@features/scrollY/scrollYSlice";

function App() {
    /* Function Dispacth Obtain ScrollY */
    const dispatch = useDispatch();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            dispatch(scrollSlice.actions.setScrollY(scrollY));
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [dispatch]);

    return (
        <Routes>
            {/* Grupo de Route Principal */}
            <Route element={<Layout />}>
                {/* Route Inicio */}
                <Route path={rootsData.index} element={<Index />} />

                {/* Route Nosotros */}
                <Route path={rootsData.about} element={<About />} />

                {/* Route Todos los Cursos */}
                <Route path={rootsData.courses} element={<Courses />} />

                {/* Route Curso Individual */}
                <Route
                    path={`${rootsData.courses}/:coursesId`}
                    element={<Course />}
                />

                {/* Route Todos Los Trabajos */}
                <Route path={rootsData.jobs} element={<Jobs />} />

                {/* Route Trabajo Individual */}
                <Route path={`${rootsData.jobs}/:jobsId`} element={<Job />} />

                {/* Route Docentes */}
                <Route path={rootsData.teachers} element={<Teachers />} />

                {/* Route Docente */}
                <Route
                    path={`${rootsData.teachers}/:teachersId`}
                    element={<Teacher />}
                />

                {/* Route Politicas de Privacidad */}
                <Route path={rootsData.privacy} element={<Privacity />} />

                {/* Route Terminos y Condiciones */}
                <Route path={rootsData.terms} element={<Terms />} />

                {/* Route Libro de Reclamaciones */}
                <Route path={rootsData.complaints} element={<Complaints />} />

                {/* Route Preguntas Frecuentes */}
                <Route path={rootsData.faq} element={<Faq />} />

                {/* Route Contactanos */}
                <Route
                    path={rootsData.testimonials}
                    element={<Testimonials />}
                />
            </Route>

            {/* Grupo de Route Autentificación */}
            <Route path={rootsData.auth} element={<Auth />}>
                {/* Route por defecto */}
                <Route index element={<Navigate to={rootsData.signIn} />} />

                {/* Route Iniciar Sesión */}
                <Route path={rootsData.signIn} element={<SignIn />} />

                {/* Route Registrarse */}
                <Route path={rootsData.signUp} element={<SignUp />} />

                {/* Route Registrarse Code */}
                <Route path={rootsData.signUpCode} element={<SignUpCode />} />

                {/* Route Registrarse Tipo de Uusario */}
                <Route path={rootsData.signUpTypeUser} element={<SignUpTypeUser />} />

                {/* Route Registrarse Foto */}
                <Route path={rootsData.signUpPhoto} element={<SignUpPhoto />} />

                {/* Route Registrarse Datos */}
                <Route path={rootsData.signUpData} element={<SignUpData />} />

                {/* ALl - moment */}
            </Route>

            <Route path={rootsData.platform} element={<Protected />}>
                {/* Route por defecto */}
                <Route index element={<Navigate to="" />} />

                {/* Route Inicio */}
            </Route>

            {/* Not Fount */}
            <Route path={rootsData.notFound} element={<NotFound />} />
        </Routes>
    );
}

export default App;
