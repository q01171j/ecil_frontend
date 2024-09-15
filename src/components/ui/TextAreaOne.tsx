import { clsx } from "clsx";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { InputOneProps } from "@interfaces";


function TextAreaOne({ placeholder, children, id }: InputOneProps) {
    const [input, setInput] = useState("");
    const [focus, setFocus] = useState(false);
    const [error, setError] = useState(false);

    const onFocus = () => {
        setFocus(true);
    };

    const onBlur = () => {
        setFocus(false);
    };

    return (
        <div
            className={twMerge(
                clsx("border-gray-300 border rounded px-2 py-[5px] flex items-center", {
                    "border-red-500": error,
                    "border-[#20495a] border-2": focus,
                })
            )}
        >
            <label className={
                twMerge(
                    clsx("fill-gray-300 border-gray-300 text-lg", {
                        "fill-red-500 border-red-500": error,
                        "fill-[#20495a] border-[#20495a]": focus,
                        "border-r pr-2 mr-2": children
                    })
                )
            } htmlFor={id}>{children}</label>
            <textarea
                id={id}
                rows={3}
                placeholder={placeholder}
                value={input}
                className="outline-none w-full placeholder:text-[#808080]"
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </div>
    );
}

export default TextAreaOne;