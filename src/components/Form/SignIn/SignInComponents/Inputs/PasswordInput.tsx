import {useState} from "react";

interface PasswordInputProps {
    value: string;
    onChange: (value: string) => void;
}

export default function PasswordInput({value, onChange}: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div
            className={'w-full flex justify-between items-center border-2 border-[#464646] p-4 mb-5 h-[3.1vh] ' +
                'bg-[rgba(28,28,28,0)] rounded-3xl font-montserrat relative transition-all duration-300' +
                ' focus:border-[#264F97] hover:border-[#264F97]'}>
            <input
                className={
                    'h-[3.1vh] w-[19.5vw] bg-[rgba(28,28,28,0)] font-montserrat text-[0.8em] ' +
                    'outline-none text-[#ffffff] '
                }
                type={showPassword ? 'text' : 'password'}
                placeholder={'Password'}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <span
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer
                ${showPassword ? 'text-[white]' : 'text-[#464646] '}`}
                id="togglePassword"
                onClick={() => setShowPassword(!showPassword)}
            >
                    &#x1F441;
            </span>

        </div>
    )
}