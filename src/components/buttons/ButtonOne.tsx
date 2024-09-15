import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { ButtonLinkProps } from '@interfaces'

function ButtonOne ({ href, children, className, onClick }: ButtonLinkProps) {
    return (
        <Link 
            to={href}
            className={twMerge(clsx(
                "relative px-3 py-2 rounded-md border grid place-items-center border-[#2F6B85] text-white bg-[#2F6B85] hover:bg-[#224e61] hover:border-[#224e61] transition-all duration-300 ease-in-out",
                className
            ))}
            onClick={onClick}
        >
            {children}
        </Link>
    )
}

export default ButtonOne