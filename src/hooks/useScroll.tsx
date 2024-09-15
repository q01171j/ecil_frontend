import { useSelector } from "react-redux"
import { RootState } from "@/store"

const useScroll = () => {
    const scrollY = useSelector((state: RootState) => state.scrollSlice.scrollY)

    const handleScrollZero = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return {scrollY, handleScrollZero}
}

export default useScroll
