import { useSelector } from "react-redux"
import { RootState } from "@/store"

const useScroll = () => {
    const scrollY = useSelector((state: RootState) => state.scrollSlice.scrollY)

    return scrollY
}

export default useScroll
