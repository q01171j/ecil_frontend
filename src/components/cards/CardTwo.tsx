import { Children } from "@interfaces";
import { Triangle } from "@icons";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface CardTwoProps extends Children {
    title: string;
    description: string;
    classNameCard?: string;
    classNameContent?: string;
    classNameSpanIcon?: string;
    classNameH3?: string;
    height?: boolean;
    onClick: () => void;
    isActive: boolean;
}

function CardTwo({
    children,
    title,
    description,
    classNameCard,
    classNameContent,
    classNameH3,
    classNameSpanIcon,
    height = false,
    onClick,
    isActive,
}: CardTwoProps) {

    return (
        <button
            onClick={onClick}
            type="button"
            className={twMerge(
                clsx(
                    `grid gap-5 rounded-md p-4 border border-gray-300 max-h-[68px] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-md hover:border-gray-400 hover:bg-gray-50 cursor-pointer`,
                    {
                        "max-h-[200px]": isActive,
                        "max-h-[80px]": !isActive && height,
                    }
                )
            )}
        >
            <div
                className={twMerge(
                    clsx("flex justify-between items-center", classNameCard)
                )}
            >
                <div
                    className={twMerge(
                        clsx("flex items-center gap-5", classNameContent)
                    )}
                >
                    <span
                        className={twMerge(
                            clsx(
                                "p-2 text-xl rounded bg-sky-100 fill-[#224e61]",
                                classNameSpanIcon
                            )
                        )}
                    >
                        {children}
                    </span>
                    <h3
                        className={twMerge(
                            clsx("text-lg font-semibold", classNameH3)
                        )}
                    >
                        {title}
                    </h3>
                </div>
                <span
                    className={twMerge(
                        clsx(
                            "rotate-180 transition-all fill-[#224e61] text-lg duration-500 ease-in-out",
                            {
                                "rotate-0": isActive,
                            }
                        )
                    )}
                >
                    <Triangle />
                </span>
            </div>
            <div className="flex justify-center w-full">
                <p className="text-sm text-justify w-[80%]">{description}</p>
            </div>
        </button>
    );
}

export default CardTwo;
