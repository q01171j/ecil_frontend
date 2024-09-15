import { CardTestimony, ContentOne } from "@components";
import { testimonialsData } from "@data";
import { clsx } from "clsx";

function Testimonials() {

    return (
        <ContentOne
            firstTitle={testimonialsData.firstTitle}
            title={testimonialsData.title}
            text={testimonialsData.text}
            classNamep={clsx("w-[66.6%]")}
            classContent="text-center items-center"
            classSection="mt-5"
            classContentChildren="gap-10 grid-cols-2"
        >
            {testimonialsData.cardsTestimony.map((teacher, index) => {
                return <CardTestimony key={index} />;
            })}
        </ContentOne>
    );
}

export default Testimonials;
