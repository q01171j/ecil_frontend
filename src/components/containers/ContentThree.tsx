import { ContentThreeProps } from "@interfaces";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function ContentThree({
    children,
    title,
    desciption,
    classNameContent,
    classNameH3,
    classNameSpan,
    classNameBorder,
    classNameChildren
}: ContentThreeProps) {
    return (
        <>
            <div
                className={twMerge(clsx("grid gap-3 w-full", classNameContent))}
            >
                <h3
                    className={twMerge(
                        clsx("font-medium text-xl", classNameH3)
                    )}
                >
                    {title}
                </h3>
                <span
                    className={twMerge(
                        clsx("text-gray-400 text-sm", classNameSpan)
                    )}
                >
                    {desciption}
                </span>
            </div>

            <div
                className={twMerge(
                    clsx("w-full h-1 border-b border-gray-400", classNameBorder)
                )}
            ></div>

            <div className={twMerge(clsx(
                "w-full",
                classNameChildren
            ))}>
                {children}
            </div>
        </>
    );
}

export default ContentThree;
