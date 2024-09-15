import { ButtonThreeProps } from "@interfaces"
import clsx from "clsx"
import { twMerge } from "tailwind-merge"

function ButtonThree({text, children, onClick, className}: ButtonThreeProps) {
  return (
    <button
        onClick={onClick}
        className={twMerge(clsx(
            "flex border hover:border-[#2F6B85] hover:border-2 transition-all rounded text-4xl items-center justify-center gap-1 py-1",
            className
        ))}
    >
        {children}
        <span className="text-base">{text}</span>
    </button>
  )
}

export default ButtonThree