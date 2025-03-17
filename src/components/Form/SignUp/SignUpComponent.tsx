import ChoiceButtons from "./SignUpComponents/ChoiceButtons.tsx";
import SocialMediaButtons from "../SocialMediaButtons.tsx";
import Inputs from "./SignUpComponents/Inputs.tsx";
import {useState} from "react";
import { validatePassword, passwordsMatch } from "../utils/validation_functions.ts";


export default function SignUpComponent() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const isValidPassword = validatePassword(password);
    const passwordsAreMatching = passwordsMatch(password, confirmPassword);


    return (
        <div className={"bg-[rgba(28,28,28,0.8)] w-[35vw] h-[77vh] px-10 rounded-3xl flex justify-center"}>
            <div className={''}>
            <ChoiceButtons/>

                <Inputs
                    username={username}
                    setUsername={setUsername}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                    isValidPassword={isValidPassword}
                    passwordsAreMatching={passwordsAreMatching}
                />
                <SocialMediaButtons/>


                <div>
                    <button
                        className=
                            {`w-full h-[5.1vh] rounded-3xl font-montserrat text-[0.8em] outline-none text-black 
                    flex items-center justify-center transition-all duration-300
                            ${
                                isValidPassword && passwordsAreMatching
                                    ? "bg-gradient-to-r from-[#00AEEF] to-[#264F97] hover:from-[#008ecf] " +
                                    "hover:to-[#1e3f7f]"
                                    : "bg-gray-500 cursor-not-allowed"
                            }`}
                        disabled={!isValidPassword || !passwordsAreMatching}
                    >
                        Sign Up
                    </button>
                </div>

            </div>
        </div>
    )
}