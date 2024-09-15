import { ContentOne, ContentTwo } from "@components";
import { privacityData } from "@data"

function Privacity() {
    return (
        <ContentOne
            firstTitle={privacityData.content.firstTitle}
            title={privacityData.content.title}
            text={privacityData.content.text}
            classNamep="w-3/4"
            classContent="text-center items-center"
            classSection="mt-5"
            classContentChildren="px-40 gap-10"
        >
            {
                privacityData.datas.map((data, index) => {
                    return (
                        <ContentTwo
                            key={index}
                            title={data.title}
                        >
                            {data.text}
                        </ContentTwo>
                    )
                })
            }
        </ContentOne>
    );
}

export default Privacity;
