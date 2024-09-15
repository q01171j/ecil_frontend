import { useState } from "react";

interface Faq {
    faqOne: boolean;
    faqTwo: boolean;
    faqThree: boolean;
    faqFour: boolean;
}

const usePurpose = () => {
    const [faq, setFaq] = useState<Faq>({
        faqOne: true,
        faqTwo: false,
        faqThree: false,
        faqFour: false,
    });

    const handleFaqOne = () => {
        setFaq({
            faqOne: true,
            faqTwo: false,
            faqThree: false,
            faqFour: false,
        });
    };

    const handleFaqTwo = () => {
        setFaq({
            faqOne: false,
            faqTwo: true,
            faqThree: false,
            faqFour: false,
        });
    };

    const handleFaqThree = () => {
        setFaq({
            faqOne: false,
            faqTwo: false,
            faqThree: true,
            faqFour: false,
        });
    };

    const handleFaqFour = () => {
        setFaq({
            faqOne: false,
            faqTwo: false,
            faqThree: false,
            faqFour: true,
        });
    };

    return {
        faq,
        handleFaqOne,
        handleFaqTwo,
        handleFaqThree,
        handleFaqFour,
    };
};

export default usePurpose;
