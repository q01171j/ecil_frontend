import { ContentOne, CardOne, CardTwo } from "@components";
import {
    Flag,
    NavigationArrow,
    Lightbulb,
    PhoneCall,
    Chats,
    EnvelopeSimple,
    MapPin,
} from "@icons";
import { aboutData } from "@data";
import { usePurpose } from "@hooks";
import clsx from "clsx";

function About() {
    const purpose = usePurpose();

    return (
        <>
            {/* PURPOSE */}
            <section className="grid grid-cols-2 mt-5 h-[532px]">
                <div className="flex items-end w-full h-full justify-center">
                    <img
                        src={aboutData.purpose.img}
                        alt=""
                        className="h-full w-[80%] rounded-t-full border-[10px] border-gray-200 object-cover"
                    />
                </div>
                <ContentOne
                    firstTitle={aboutData.purpose.content.firstTitle}
                    title={aboutData.purpose.content.title}
                    text={aboutData.purpose.content.text}
                    classNamep={clsx("w-3/4")}
                    classContentChildren={clsx("flex flex-col justify-start")}
                >
                    <CardTwo
                        title={aboutData.purpose.objects.title}
                        description={aboutData.purpose.objects.description}
                        onClick={purpose.handleObject}
                        isActive={purpose.purpose.object}
                    >
                        <Flag />
                    </CardTwo>
                    <CardTwo
                        title={aboutData.purpose.mision.title}
                        description={aboutData.purpose.mision.description}
                        onClick={purpose.handleMision}
                        isActive={purpose.purpose.mision}
                    >
                        <NavigationArrow />
                    </CardTwo>
                    <CardTwo
                        title={aboutData.purpose.vision.title}
                        description={aboutData.purpose.vision.description}
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
                    firstTitle={aboutData.contact.content.firstTitle}
                    title={aboutData.contact.content.title}
                    text={aboutData.contact.content.text}
                    classNamep={clsx("w-3/4")}
                    classContentChildren={clsx("grid-cols-2 gap-7 pr-24")}
                >
                    <CardOne
                        h3={aboutData.contact.call.h3}
                        span={aboutData.contact.call.span}
                        textButton={aboutData.contact.call.textButton}
                        href={aboutData.contact.call.href}
                    >
                        <PhoneCall />
                    </CardOne>
                    <CardOne
                        h3={aboutData.contact.whatsapp.h3}
                        span={aboutData.contact.whatsapp.span}
                        textButton={aboutData.contact.whatsapp.textButton}
                        href={aboutData.contact.whatsapp.href}
                    >
                        <Chats />
                    </CardOne>
                    <CardOne
                        h3={aboutData.contact.email.h3}
                        span={aboutData.contact.email.span}
                        textButton={aboutData.contact.email.textButton}
                        href={aboutData.contact.email.href}
                    >
                        <EnvelopeSimple />
                    </CardOne>
                    <CardOne
                        h3={aboutData.contact.location.h3}
                        span={aboutData.contact.location.span}
                        textButton={aboutData.contact.location.textButton}
                        href={aboutData.contact.location.href}
                    >
                        <MapPin />
                    </CardOne>
                </ContentOne>
                <div className="flex items-end w-full h-full justify-center">
                    <img
                        src={aboutData.contact.img}
                        alt=""
                        className="h-full w-[80%] rounded-t-full border-[10px] border-gray-200 object-cover"
                    />
                </div>
            </section>
        </>
    );
}

export default About;
