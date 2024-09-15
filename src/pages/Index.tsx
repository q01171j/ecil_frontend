import {
    ButtonOne,
    CardCourse,
    CardTeacher,
    CardTestimony,
    ContentOne,
    SelectOne,
    SwiperContent,
} from "@components";
import { indexData, teachersData, testimonialsData } from "@data";
import { useDataPeru } from "@hooks";
import { clsx } from "clsx";
import { SwiperSlide } from "swiper/react";

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

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            <section id="hero" className="w-full ContentHero grid grid-cols-9">
                <div className="col-span-4 gap-20 grid place-content-center">
                    <div className="flex flex-col cursor-default">
                        <div className="w-10/12 gap-5 grid">
                            <span className="bg-[#bce4f5] text-[#2F6B85] w-[57%] h-9 text-sm grid place-items-center rounded-md">
                                {indexData.hero.span}
                            </span>
                            <h1 className="text-5xl w-full font-semibold font-EmbedCode">
                                {indexData.hero.h1}
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-11/12 grid gap-5">
                            <p className="cursor-default text-base">
                                {indexData.hero.p}
                            </p>
                            <div className="flex gap-5 h-14">
                                <ButtonOne
                                    href={indexData.hero.btnOne.href}
                                    className={clsx("px-5")}
                                >
                                    {indexData.hero.btnOne.text}
                                </ButtonOne>
                                <ButtonOne
                                    href={indexData.hero.btnTwo.href}
                                    className={clsx(
                                        "bg-transparent text-[#2F6B85] hover:bg-transparent hover:text-[#224e61]"
                                    )}
                                >
                                    {indexData.hero.btnTwo.text}
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
                            {indexData.hero.modal.h3}
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="col-span-2">
                                <SelectOne
                                    data={departaments}
                                    placeholder={
                                        indexData.hero.modal.placeholderOne
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
                                placeholder={
                                    indexData.hero.modal.placeholderTwo
                                }
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
                                    indexData.hero.modal.placeholderThree
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
                            {indexData.hero.modal.btn}
                        </button>
                    </form>
                </div>
            </section>

            <section id="agreements" className="grid grid-cols-4 gap-5">
                {indexData.agreements.map((agreement, index) => (
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
                <SwiperContent textButton="Explorar más" colums={4}>
                    {array.map((index) => (
                        <SwiperSlide key={index} className="px-2">
                            <CardCourse />
                        </SwiperSlide>
                    ))}
                </SwiperContent>
            </ContentOne>

            {/* Content Teachers */}
            <ContentOne
                firstTitle={teachersData.firstTitle}
                title={teachersData.title}
                text={teachersData.text}
            >
                <SwiperContent textButton="Conocer más" colums={2}>
                    {teachersData.cardsTeachers.map((index) => (
                        <SwiperSlide key={index} className="px-2">
                            <CardTeacher />
                        </SwiperSlide>
                    ))}
                </SwiperContent>
            </ContentOne>

            {/* Testimonials  */}
            <ContentOne
                firstTitle={testimonialsData.firstTitle}
                title={testimonialsData.title}
                text={testimonialsData.text}
            >
                <SwiperContent textButton="Ver más" colums={3}>
                    {testimonialsData.cardsTestimony.map((index) => (
                        <SwiperSlide key={index} className="px-2">
                            <CardTestimony />
                        </SwiperSlide>
                    ))}
                </SwiperContent>
            </ContentOne>
        </>
    );
}

export default Index;
