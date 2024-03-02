import {
    ButtonOne,
    CardCourse,
    CardTeacher,
    CardTestimony,
    ContentOne,
    SelectOne,
    Swiper,
    SwiperControls,
} from "@components";
import { indexHeroData, indexAgreementsData } from "@data";
import { useDataPeru } from "@hooks";
import { clsx } from "clsx";

function Index() {
    const [
        departaments,
        provinces,
        districts,
        handleProvinces,
        handleDistricts,
        handleSubmit,
        setDataPeru,
    ] = useDataPeru();

    return (
        <>
            <section id="hero" className="w-full ContentHero grid grid-cols-9">
                <div className="col-span-4 gap-20 grid place-content-center">
                    <div className="flex flex-col cursor-default">
                        <div className="w-10/12 gap-5 grid">
                            <span className="bg-[#bce4f5] text-[#224e61] w-[57%] h-9 text-sm grid place-items-center rounded-md">
                                {indexHeroData.span}
                            </span>
                            <h1 className="text-5xl w-full font-semibold font-EmbedCode">
                                {indexHeroData.h1}
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-11/12 grid gap-5">
                            <p className="cursor-default text-base">
                                {indexHeroData.p}
                            </p>
                            <div className="flex gap-5 h-14">
                                <ButtonOne
                                    href={indexHeroData.btnOne.href}
                                    className={clsx("px-5")}
                                >
                                    {indexHeroData.btnOne.text}
                                </ButtonOne>
                                <ButtonOne
                                    href={indexHeroData.btnTwo.href}
                                    className={clsx(
                                        "bg-transparent text-[#2F6B85] hover:bg-transparent hover:text-[#224e61]"
                                    )}
                                >
                                    {indexHeroData.btnTwo.text}
                                </ButtonOne>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-5 grid grid-cols-11 relative">
                    <div className="col-span-8 col-start-4 flex h-full items-center">
                        <div className="hero-img w-full h-[90%] rounded-2xl"></div>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white absolute grid gap-6 bottom-3 rounded-xl p-6 shadow-xl border border-gray-300 w-[400px]"
                    >
                        <h3 className="text-xl font-semibold font-EmbedCode text-center cursor-default">
                            {indexHeroData.modal.h3}
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="col-span-2">
                                <SelectOne
                                    data={departaments}
                                    placeholder={
                                        indexHeroData.modal.placeholderOne
                                    }
                                    onChange={(data: any) => {
                                        handleProvinces({
                                            value: data.value,
                                            label: data.label,
                                        });
                                        setDataPeru((prevState) => ({
                                            ...prevState,
                                            departaments: data.label,
                                        }));
                                    }}
                                />
                            </div>
                            <SelectOne
                                data={provinces}
                                placeholder={indexHeroData.modal.placeholderTwo}
                                onChange={(data: any) => {
                                    handleDistricts({
                                        value: data.value,
                                        label: data.label,
                                    });
                                    setDataPeru((prevState) => ({
                                        ...prevState,
                                        provinces: data.label,
                                    }));
                                }}
                            />
                            <SelectOne
                                data={districts}
                                placeholder={
                                    indexHeroData.modal.placeholderThree
                                }
                                onChange={(data: any) => {
                                    setDataPeru((prevState) => ({
                                        ...prevState,
                                        districts: data.label,
                                    }));
                                }}
                            />
                        </div>
                        <button className="text-[#2F6B85] py-2 rounded-md text-md border border-[#2F6B85] hover:bg-[#2F6B85] hover:text-white transition-all">
                            {indexHeroData.modal.btn}
                        </button>
                    </form>
                </div>
            </section>

            <section id="agreements" className="grid grid-cols-4 gap-5">
                {indexAgreementsData.map((agreement, index) => (
                    <picture
                        key={index}
                        className="h-28 flex items-center opacity-40 hover:opacity-100 transition-all"
                    >
                        <img
                            src={agreement.img}
                            alt={agreement.alt}
                            className="h-full"
                        />
                    </picture>
                ))}
            </section>

            {/* Content Courses */}
            <ContentOne
                firstTitle="Descubre"
                title="Nuestros Cursos"
                text="Explora nuestra amplia gama de cursos. Aprende nuevas habilidades y obtén certificados de finalización."
            >
                <Swiper classSwiper={clsx("grid-cols-4")}>
                    <CardCourse />
                    <CardCourse />
                    <CardCourse />
                    <CardCourse />
                </Swiper>

                <SwiperControls textButton="Explorar más" />
            </ContentOne>

            {/* Content Teachers */}
            <ContentOne
                firstTitle="Conoce"
                title="Nuestros Docentes"
                text="Nuestros profesores son expertos en sus campos y están comprometidos a ayudarte a alcanzar tus metas."
            >
                <Swiper classSwiper={clsx("grid-cols-2")}>
                    <CardTeacher />
                    <CardTeacher />
                </Swiper>

                <SwiperControls textButton="Conocer más" />
            </ContentOne>

            {/* Content  */}
            <ContentOne
                firstTitle="Testimonios de"
                title="Nuestros Estudiantes"
                text="Descubre cómo nuestros estudiantes han cambiado sus vidas con el aprendizaje en línea."
            >
                <Swiper classSwiper={clsx("grid-cols-3")}>
                    <CardTestimony />
                    <CardTestimony />
                    <CardTestimony />
                </Swiper>
                <SwiperControls textButton="Ver más" />
            </ContentOne>
        </>
    );
}

export default Index;
