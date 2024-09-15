import { ContentOne, CardTeacher } from "@components";
import { teachersData } from "@data";
import clsx from "clsx";

function Teachers() {

    return (
        <ContentOne
            firstTitle={teachersData.firstTitle}
            title={teachersData.title}
            text={teachersData.text}
            classNamep={clsx("w-[66.6%]")}
            classContent="text-center items-center"
            classSection="mt-5"
            classContentChildren="gap-10 grid-cols-2"
        >
            {teachersData.cardsTeachers.map((teacher, index) => {
                return (
                    <CardTeacher
                        key={index}
                    />
                );
            })}
        </ContentOne>
    );
}

export default Teachers;
