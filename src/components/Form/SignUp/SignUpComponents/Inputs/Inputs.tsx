import * as React from "react";
import PasswordField from "./PasswordField.tsx";
import {useEffect, useState} from "react";
import InputField from "./InputField.tsx";

interface InputsProps {
    username: string;
    setUsername: (username: string) => void;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    confirmPassword: string;
    setConfirmPassword: (confirmPassword: string) => void;
    isValidPassword: boolean;
    passwordsAreMatching: boolean;
}

const Inputs: React.FC<InputsProps> = ({
                                           username,
                                           setUsername,
                                           email,
                                           setEmail,
                                           password,
                                           setPassword,
                                           confirmPassword,
                                           setConfirmPassword,
                                           isValidPassword,
                                           passwordsAreMatching
                                       }) => {
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        console.log("Form updated", {username, email, password, confirmPassword});
    }, [username, email, password, confirmPassword]);

    return (
        <div className="w-[22vw] flex flex-wrap justify-center">
            <InputField type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <InputField type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <PasswordField placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div
                className={'w-full flex justify-between items-center border-2 border-[#464646] p-4 mb-5 ' +
                                    'h-[3.1vh] bg-[rgba(28,28,28,0)] rounded-3xl font-montserrat relative ' +
                                    'transition-all duration-300 focus:border-[#264F97] hover:border-[#264F97]'}>
                <input
                    className={
                        'h-[3.1vh] w-[19.5vw] bg-[rgba(28,28,28,0)] font-montserrat text-[0.8em] ' +
                        'outline-none text-[#ffffff]'
                    }
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {!passwordsAreMatching && confirmPassword.length > 0 && (
                    <p className="text-red-500 important! text-sm w-full font-montserrat ">
                        Passwords do not match!
                    </p>
                )}
                <span
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${showConfirmPassword ? "text-white" : "text-[#464646]"}`}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    &#x1F441;
                </span>

            </div>
            {!isValidPassword && password.length > 0 && (
                <div className="text-red-500 text-sm w-full font-montserrat mb-5 text-center border-2 border-[#464646] rounded-3xl p-4 bg-[rgba(28,28,28,0.9)]">
                    Password must be 8+ characters, include 1 uppercase letter and number!
                </div>
            )}
        </div>
    );
};

export default Inputs;
