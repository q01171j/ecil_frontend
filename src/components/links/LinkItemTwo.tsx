import { Link } from "react-router-dom";
import { Children } from "@interfaces";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface LinkItemTwoProps extends Children {
    link: string;
    className?: string;
}

function LinkItemTwo({ link, className, children }: LinkItemTwoProps) {
    return (
        <Link
            to={link}
            className={twMerge(clsx(
                "relative text-base h-9 flex items-center gap-2 after:absolute after:h-1 after:w-0 after:bg-[#2F6B85] hover:text-[#2F6B85] hover:fill-[#2F6B85] after:bottom-0 hover:after:w-full after:transition-all after:duration-300",
                className
            ))}
        >
            {children}
        </Link>
    );
}

export default LinkItemTwo;
