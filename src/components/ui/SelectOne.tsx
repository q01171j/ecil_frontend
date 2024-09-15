import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ISelectOneProps } from "@interfaces";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

function SelectOne({
    data,
    placeholder,
    onChange,
    className,
}: ISelectOneProps) {
    const animatedComponents = makeAnimated();

    return (
        <Select
            options={data}
            components={animatedComponents}
            placeholder={placeholder}
            onChange={onChange}
            isDisabled={data.length === 0}
            className={twMerge(clsx("cursor-pointer", className))}
            styles={{
                control: (provided, state) => ({
                    ...provided,
                    borderColor: state.isFocused
                        ? "#2F6B85"
                        : provided.borderColor,
                    cursor: "pointer",
                    "&:hover": { borderColor: "#2F6B85" },
                }),
                option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected
                        ? "#2F6B85"
                        : state.isFocused
                        ? "#E5E7EB"
                        : "white",
                    color: state.isSelected ? "white" : "#111827",
                }),
            }}
        />
    );
}

export default SelectOne;
