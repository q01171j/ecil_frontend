import { useState } from "react"

interface Purpose {
    object: boolean;
    mision: boolean;
    vision: boolean;
}

const usePurpose = () => {
    const [purpose, setPurpose] = useState<Purpose>({
        object: true,
        mision: false,
        vision: false
    })

    const handleObject = () => {
        setPurpose({
            object: true,
            mision: false,
            vision: false
        })
    }

    const handleMision = () => {
        setPurpose({
            object: false,
            mision: true,
            vision: false
        })
    }

    const handleVision = () => {
        setPurpose({
            object: false,
            mision: false,
            vision: true
        })
    }

    return {
        purpose,
        handleObject,
        handleMision,
        handleVision
    }
}

export default usePurpose