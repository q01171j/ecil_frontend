import { Children } from "@interfaces";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ContentOneProps extends Children {
    firstTitle: string;
    title: string;
    text: string;
    classNameH3?: string;
    classNameH1?: string;
    classNamep?: string;
    classContentChildren?: string;
    classSection?: string;
    classContent?: string;
}

function ContentOne({
    firstTitle,
    title,
    text,
    children,
    classNameH3,
    classNameH1,
    classNamep,
    classContentChildren,
    classSection,
    classContent
}: ContentOneProps) {
    return (
        <section className={twMerge(clsx(
            "grid gap-6",
            classSection
        ))}>
            <div className={twMerge(clsx(
                "flex flex-col gap-3",
                classContent
            ))}>
                <h3
                    className={twMerge(
                        clsx("text-xl font-medium text-[#E7AF28]", classNameH3)
                    )}
                >
                    {firstTitle}
                </h3>
                <h1
                    className={twMerge(
                        clsx(
                            "text-4xl font-semibold text-[#20495a]",
                            classNameH1
                        )
                    )}
                >
                    {title}
                </h1>
                <p
                    className={twMerge(
                        clsx("text-base font-normal w-1/2", classNamep)
                    )}
                >
                    {text}
                </p>
            </div>
            <div className={twMerge(clsx(
                "grid gap-4",
                classContentChildren
            ))}>{children}</div>
        </section>
    );
}

export default ContentOne;
