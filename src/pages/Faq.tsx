import { ContentOne, CardTwo } from "@components";
import { Check } from "@icons";
import { useFaq } from "@hooks";
import { faqData } from "@data"

function Faq() {

    const { faq, handleFaqOne, handleFaqTwo, handleFaqThree, handleFaqFour } = useFaq();
    
    return (
        <div className="grid grid-cols-2 mt-5 h-[650px]">
            <ContentOne
                firstTitle={faqData.content.firstTitle}
                title={faqData.content.title}
                text={faqData.content.text}
                classNamep="w-4/5"
            >
                <CardTwo
                    title={faqData.quesOne.title}
                    description={faqData.quesOne.description}
                    onClick={handleFaqOne}
                    isActive={faq.faqOne}
                    classNameContent="w-4/5"
                    classNameH3="text-base text-left"
                    height={true}
                >
                    <Check />
                </CardTwo>

                <CardTwo
                    title={faqData.quesTwo.title}
                    description={faqData.quesTwo.description}
                    onClick={handleFaqTwo}
                    isActive={faq.faqTwo}
                    classNameContent="w-4/5"
                    classNameH3="text-base text-left"
                >
                    <Check />
                </CardTwo>

                <CardTwo
                    title={faqData.quesThree.title}
                    description={faqData.quesThree.description}
                    onClick={handleFaqThree}
                    isActive={faq.faqThree}
                    classNameContent="w-4/5"
                    classNameH3="text-base text-left"
                    height={true}
                >
                    <Check />
                </CardTwo>

                <CardTwo
                    title={faqData.quesFour.title}
                    description={faqData.quesFour.description}
                    onClick={handleFaqFour}
                    isActive={faq.faqFour}
                    classNameContent="w-4/5"
                    classNameH3="text-base text-left"
                    height={true}
                >
                    <Check />
                </CardTwo>
            </ContentOne>
            <div className="flex items-end w-full h-full justify-center">
                <img
                    src={faqData.img}
                    alt=""
                    className="h-full w-[80%] rounded-t-full border-[10px] border-gray-200 object-cover"
                />
            </div>
        </div>
    );
}

export default Faq;
