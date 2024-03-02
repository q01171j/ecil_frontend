import { ButtonOne } from "@components";

function CardCourse() {
    const img =
        "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <article className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
            <div className="relative">
                <img src={img} alt="course" className="aspect-video object-cover object-top w-full" />
                <span className="absolute top-3 left-3 bg-[#d6a533] text-white px-2 py-1 rounded-lg text-xs">En vivo</span>
            </div>
            <div className="grid gap-4 p-3">
                <h3 className="font-medium text-xl leading-none">
                    Curso de Mozeria Experto xd xd
                </h3>
                <p className="text-sm text-justify text-gray-500">
                    Curso Intensivo para mozeria.
                </p>
                <div className="flex justify-between items-center">
                    <span className="text-sm">8 Lecciones</span>
                    <ButtonOne
                        href="/"
                        className="text-sm px-4"
                    >
                        Ver más
                    </ButtonOne>
                </div>
            </div>
        </article>
    );
}

export default CardCourse;
