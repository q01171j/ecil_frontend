import Select from "react-select";
import makeAnimated from "react-select/animated";

interface Data {
    value: string;
    label: string;
}

interface ISelectOneProps {
    data: Data[];
    placeholder: string;
    onChange: (values: any) => void;
}

function SelectOne({ data, placeholder, onChange }: ISelectOneProps) {
    const animatedComponents = makeAnimated();

    return (
        <Select
            options={data}
            components={animatedComponents}
            placeholder={placeholder}
            onChange={onChange}
            isDisabled={data.length === 0}
            className="cursor-pointer"
            styles={{
                control: (styles) => (
                    console.log(styles),
                    {
                        ...styles,
                        "&:hover": { borderColor: "#2F6B85" },
                        cursor: "pointer",
                    }
                ),
                option: (styles, { isFocused, isSelected }) => ({
                    ...styles,
                    backgroundColor: isSelected
                        ? "#2F6B85"
                        : isFocused
                        ? "#E5E7EB"
                        : "white",
                    color: isSelected ? "white" : "#111827",
                }),
            }}
        />
    );
}

export default SelectOne;
