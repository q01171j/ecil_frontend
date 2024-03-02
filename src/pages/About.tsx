import { ContentOne, CardOne, CardTwo } from "@components";
import {
    PhoneCall,
    Chats,
    EnvelopeSimple,
    MapPin,
    Flag,
    NavigationArrow,
    Lightbulb,
} from "@icons";
import { usePurpose } from "@hooks";
import clsx from "clsx";

function About() {
    const listItemHero = ["item1", "item2", "item3"];

    const purpose = usePurpose();

    const imgContact =
        "https://images.unsplash.com/photo-1516788875874-c5912cae7b43?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const imgProp =
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <>
            <section>

            </section>

            {/* PURPOSE */}
            <section className="grid grid-cols-2 h-[510px]">
                <div className="flex items-end w-full h-full justify-center">
                    <img
                        src={imgProp}
                        alt=""
                        className="h-full w-[80%] rounded-t-full border-[10px] border-gray-200 object-cover"
                    />
                </div>
                <ContentOne
                    firstTitle="Descubre sobre"
                    title="Nuestro Propósito"
                    text="Sumérgete en el corazón de nuestra empresa y conoce el motor que impulsa cada una de nuestras acciones"
                    classNamep={clsx("w-3/4")}
                    classContentChildren={clsx("flex flex-col justify-start")}
                >
                    <CardTwo
                        title="Nuestro Objetivo"
                        description="Tenemos un claro compromiso con la calidad e inclusión en la educación; en virtud a ello, apostamos por las capacitaciones continuas y de acceso libre bajo la modalidad virtual con participación de reconocidos ponentes de alto nivel."
                        onClick={purpose.handleObject}
                        isActive={purpose.purpose.object}
                    >
                        <Flag />
                    </CardTwo>
                    <CardTwo
                        title="Nuestra Misión"
                        description="Contribuir a la formación integral de las personas, a través de la educación virtual, para que sean capaces de afrontar los retos del mundo actual y futuro."
                        onClick={purpose.handleMision}
                        isActive={purpose.purpose.mision}
                    >
                        <NavigationArrow />
                    </CardTwo>
                    <CardTwo
                        title="Nuestro Visión"
                        description="Ser reconocidos como una institución líder en la formación virtual, que promueve el desarrollo de habilidades y competencias para el crecimiento personal y profesional."
                        onClick={purpose.handleVision}
                        isActive={purpose.purpose.vision}
                    >
                        <Lightbulb />
                    </CardTwo>
                </ContentOne>
            </section>

            {/* --- CONTACT --- */}
            <section id="contact" className="grid grid-cols-2">
                <ContentOne
                    firstTitle="Obtén Asistencia Personalizada"
                    title="¡Contáctanos!"
                    text="¿Necesitas ayuda? ¡Estamos aquí para ti! Ponte en contacto con nuestro equipo hoy mismo."
                    classNamep={clsx("w-3/4")}
                    classContentChildren={clsx("grid-cols-2 gap-5 pr-24")}
                >
                    <CardOne
                        h3="Llamar "
                        span="987654321"
                        textButton="Llama ahora"
                        href="/"
                    >
                        <PhoneCall />
                    </CardOne>
                    <CardOne
                        h3="Whatsapp"
                        span="987654321"
                        textButton="Escirbe un mensaje"
                        href="/"
                    >
                        <Chats />
                    </CardOne>
                    <CardOne
                        h3="Correo Electronico"
                        span="ecil@gmail.com"
                        textButton="Envía un correo"
                        href="/"
                    >
                        <EnvelopeSimple />
                    </CardOne>
                    <CardOne 
                        h3="Ubicación" 
                        span="Jr. lo rosales"
                        textButton="Ver en el mapa"
                        href="/"
                    >
                        <MapPin />
                    </CardOne>
                </ContentOne>
                <div className="flex items-end w-full h-full justify-center">
                    <img
                        src={imgContact}
                        alt=""
                        className="h-full w-[80%] rounded-t-full border-[10px] border-gray-200 object-cover"
                    />
                </div>
            </section>
        </>
    );
}

export default About;
