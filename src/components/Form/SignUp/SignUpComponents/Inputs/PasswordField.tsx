import * as React from "react";
import {useState} from "react";

interface PasswordFieldProps {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ placeholder, value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="w-full flex justify-between items-center border-2 border-[#464646] p-4 mb-5 h-[3.1vh]
                        bg-transparent rounded-3xl font-montserrat relative transition-all duration-300
                        focus:border-[#264F97] hover:border-[#264F97]">
            <input
                className="h-[3.1vh] w-[19.5vw] bg-transparent font-montserrat text-[0.8em]
                           outline-none text-[#ffffff]"
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <span
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer 
                            ${showPassword ? "text-white" : "text-[#464646]"}`}
                onClick={() => setShowPassword(!showPassword)}>
                &#x1F441;
            </span>
        </div>
    );
};

export default PasswordField;