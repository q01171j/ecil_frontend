import { clsx } from "clsx";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { InputOneProps } from "@interfaces";
import { Eye, EyeSlash } from "@icons";

function InputTwo({
    placeholder,
    children,
    id,
    isAuth = false,
}: InputOneProps) {
    const [input, setInput] = useState("");
    const [focus, setFocus] = useState(false);
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const onFocus = () => {
        setFocus(true);
    };

    const onBlur = () => {
        setFocus(false);
    };

    return (
        <div
            className={twMerge(
                clsx(
                    "border-gray-300 border rounded px-2 py-[5px] flex items-center",
                    {
                        "border-red-500": error,
                        "border-[#20495a] border-2": focus,
                        "h-12": isAuth,
                    }
                )
            )}
        >
            <label
                className={twMerge(
                    clsx("fill-gray-300 border-gray-300 text-lg", {
                        "fill-red-500 border-red-500": error,
                        "fill-[#20495a] border-[#20495a]": focus,
                        "border-r pr-2 mr-2": children,
                    })
                )}
                htmlFor={id}
            >
                {children}
            </label>
            <input
                id={id}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                className="outline-none w-full placeholder:text-[#808080]"
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <button
                type="button"
                className={twMerge(clsx("mx-2 text-lg"))}
                onClick={handleShowPassword}
            >
                {showPassword ? <EyeSlash /> : <Eye />}
            </button>
        </div>
    );
}

export default InputTwo;
