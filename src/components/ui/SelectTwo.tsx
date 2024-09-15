import SelectOne from "./SelectOne"
import { ISelectTwoProps } from "@interfaces"


function SelectTwo({data, placeholder, onChange, label} : ISelectTwoProps) {
  return (
    <div className="grid gap-1">
      <label htmlFor="nose">{label}</label>
      <SelectOne
        data={data}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

export default SelectTwo