import { Children } from "@interfaces";
import { Triangle } from "@icons";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface CardTwoProps extends Children {
    title: string;
    description: string;
    onClick: () => void;
    isActive: boolean;
}

function CardTwo({ children, title, description, onClick, isActive }: CardTwoProps) {
    return (
        <button onClick={onClick} type="button" className={twMerge(clsx(
            "grid gap-5 rounded-md p-4 border border-gray-300 max-h-[170px] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-md hover:border-gray-400 hover:bg-gray-50 cursor-pointer",
            {
                "max-h-[68px]": !isActive
            }
        ))}>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <span className="p-2 text-xl rounded bg-sky-100 fill-[#224e61]">{children}</span>
                    <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <span className={twMerge(clsx(
                    "rotate-180 transition-all fill-[#224e61] text-lg duration-500 ease-in-out",
                    {
                        "rotate-0": isActive
                    }
                ))}>
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
