import { ContentFourProps } from "@interfaces"
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function ContentFour({children, h4, classNameChildren, classNameContent}: ContentFourProps) {
    return (
        <div className={twMerge(clsx(
            "flex items-center w-full justify-between",
            classNameContent
        ))}>
            <h4 className="font-light text-md">{h4}</h4>
            <div className={twMerge(clsx(
                "grid grid-cols-2 gap-4 w-[510px] h-10",
                classNameChildren
            ))}>
                {children}
            </div>
        </div>
    );
}

export default ContentFour;
