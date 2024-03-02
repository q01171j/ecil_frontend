import { ButtonOne, LinkItemTwo } from "@components";

function CardTeacher() {
    const img =
        "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <article className="w-full h-[345px]">
            <div className="w-full h-[330px]">
                <div className="relative flex justify-end h-full">
                    <img
                        src={img}
                        alt=""
                        className="absolute object-cover rounded-lg h-[270px] w-[230px] left-0 object-top top-7 shadow-xl"
                    />
                    <div className="w-5/6 h-full rounded-xl shadow-xl hover:shadow-2xl flex justify-end items-center transition-all">
                        <div className="w-[70%] h-[80%] pr-8 flex flex-col justify-between">
                            <div className="grid gap-2">
                                <span className="text-base">Abogado</span>
                                <h3 className="text-lg font-medium">
                                    Cristian Dominguez Herrera
                                </h3>
                            </div>
                            <p className="text-sm text-justify">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Explicabo sint, recusandae
                                debitis facere numquam dolore! Alias nam tenetur
                                error maxime
                            </p>
                            <div className="flex w-full justify-between">
                                <LinkItemTwo link="/" className="text-base">
                                    Ver más
                                </LinkItemTwo>
                                <ButtonOne
                                    href="/"
                                    className="text-sm py-3 px-5"
                                >
                                    Ver Cursos
                                </ButtonOne>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default CardTeacher;
