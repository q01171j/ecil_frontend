import { ContentOne, InputOne, CardCourse } from "@components";
import { MagnifyingGlass } from "@icons";
import { coursesData } from "@data";

function Courses() {
    return (
        <section>
            <ContentOne
                firstTitle={coursesData.firstTitle}
                title={coursesData.title}
                text={coursesData.text}
                classNamep="w-2/4"
                classContent="text-center items-center"
                classSection="mt-5"
                classContentChildren="px-40 gap-10"
            >
                <div className="flex items-center justify-between">
                    <span>Se encontraron 10 cursos</span>
                    <InputOne placeholder="Buscar">
                        <MagnifyingGlass />
                    </InputOne>
                </div>
                <div className="w-full ">
                    <ul className="flex gap-8 overflow-auto">
                        <li className="flex items-center gap-2 text-[#2F6B85] border-b-2 border-[#2F6B85]">
                            Atencion al Cliente{" "}
                            <span className="text-xs">2</span>
                        </li>
                        <li className="flex items-center gap-2">
                            Atencion al Cliente{" "}
                            <span className="text-xs">2</span>
                        </li>
                        <li className="flex items-center gap-2">
                            Atencion al Cliente{" "}
                            <span className="text-xs">2</span>
                        </li>
                        <li className="flex items-center gap-2">
                            Atencion al Cliente{" "}
                            <span className="text-xs">2</span>
                        </li>
                    </ul>
                </div>
                <div className="grid grid-cols-3 gap-7">
                    {
                        coursesData.courses.map((index) => (
                            <CardCourse
                                key={index}
                            />
                        ))
                    }
                </div>
            </ContentOne>
        </section>
    );
}

export default Courses;
