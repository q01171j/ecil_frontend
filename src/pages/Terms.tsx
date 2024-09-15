import { ContentOne, ContentTwo } from "@components";
import { termsData } from "@data";

function Terms() {
    return (
        <>
            <ContentOne
                firstTitle={termsData.content.firstTitle}
                title={termsData.content.title}
                text={termsData.content.text}
                classNamep="w-3/4"
                classContent="text-center items-center"
                classSection="mt-5"
                classContentChildren="px-40 gap-10"
            >
                {termsData.list.map((item, index) => (
                    <ContentTwo key={index} title={item.title}>
                        {item.description}
                    </ContentTwo>
                ))}
            </ContentOne>
        </>
    );
}

export default Terms;
