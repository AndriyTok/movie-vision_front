import * as React from "react";

interface InputFieldProps {
    type:string;
    placeholder:string;
    value:string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({type,placeholder, value, onChange}) => {
    return(
        <input
            className={
                'border-2 border-[#464646] p-4 mb-5 w-full h-[3.1vh] bg-[rgba(28,28,28,0)] ' +
                'rounded-3xl font-montserrat text-[0.8em] outline-none text-[#ffffff] ' +
                'transition-all duration-300 focus:border-[#264F97] hover:border-[#264F97]'
            }
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default InputField