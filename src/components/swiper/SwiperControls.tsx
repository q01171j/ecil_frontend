import { ButtonOne, ButtonTwo } from "@components";
import { CaretLeft, CaretRight } from "@icons";

interface SwiperControlsProps {
    textButton: string;
    handlePrev: () => void;
    handleNext: () => void;
}

function SwiperControls({ textButton, handlePrev, handleNext }: SwiperControlsProps) {
    return (
        <div className="flex justify-center mt-4">
            <div className="flex gap-4">
                <ButtonTwo
                    onClick={handlePrev}
                    className="bg-transparent text-2xl px-1.5 fill-[#E7AF28] border-[#E7AF28] hover:bg-[#E7AF28] hover:fill-white hover:border-[#E7AF28]"
                >
                    <CaretLeft />
                </ButtonTwo>

                <ButtonOne
                    href="/"
                    className="bg-transparent border-[#E7AF28] text-[#E7AF28] hover:bg-[#E7AF28] hover:border-[#E7AF28] hover:text-white"
                >
                    {textButton}
                </ButtonOne>

                <ButtonTwo
                    onClick={handleNext}
                    className="bg-transparent text-2xl px-1.5 fill-[#E7AF28] border-[#E7AF28] hover:bg-[#E7AF28] hover:fill-white hover:border-[#E7AF28]"
                >
                    <CaretRight />
                </ButtonTwo>
            </div>
        </div>
    );
}

export default SwiperControls;
