import { Children } from "@interfaces";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonTwoProps extends Children {
    onClick: () => void;
    className?: string;
}

function ButtonTwo({ children, onClick, className }: ButtonTwoProps) {
    return (
        <button
            onClick={onClick}
            type="button"
            className={twMerge(
                clsx(
                    "relative px-3 py-2 rounded-md border grid place-items-center border-[#2F6B85] text-white bg-[#2F6B85] hover:bg-[#224e61] hover:border-[#224e61] transition-all duration-300 ease-in-out",
                    className
                )
            )}
        >
            {children}
        </button>
    );
}

export default ButtonTwo;
