import { useRef } from "react";
import { SwiperControls } from "..";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

// Definimos la interfaz de las propiedades
interface SwiperContentProps {
    children: React.ReactNode;
    textButton: string;
    colums: number;
}

function SwiperContent({ children, textButton, colums }: SwiperContentProps) {

    const swiperRef = useRef<any>(); // Definimos el tipo de referencia como Swiper

    // Definimos las funciones handleNext y handlePrev
    const handleNext = () => {
        swiperRef.current?.slideNext(); // Usamos el operador de opción segura ?.
    }

    const handlePrev = () => {
        swiperRef.current?.slidePrev(); // Usamos el operador de opción segura ?.
    }

    return (
        <div className="grid">
            <Swiper
                slidesPerView={colums}
                modules={[Navigation]}
                navigation={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="w-[99.9%] relative"
            >
                {children}
            </Swiper>
            <SwiperControls textButton={textButton} handleNext={handleNext} handlePrev={handlePrev} /> {/* Pasamos las funciones */}
        </div>
    );
}

export default SwiperContent;
