import { twMerge } from "tailwind-merge";
import { Children } from "@interfaces";
import { clsx } from "clsx";

interface SwiperProps extends Children {
    classSwiper?: string;
}

function Swiper({ children, classSwiper }: SwiperProps) {
    return (
        <div className={twMerge(clsx("grid grid-cols-4 gap-5", classSwiper))}>
            {children}
        </div>
    );
}

export default Swiper;
