import SignUpChoiceButtons from "./SignUpComponents/SignUpChoiceButtons.tsx";
import SocialMediaButtons from "../CommonComponents/SocialMediaButtons.tsx";
import Inputs from "./SignUpComponents/Inputs/Inputs.tsx";
import {useState} from "react";
import {validatePassword, passwordsMatch} from "../utils/validation_functions.ts";
import * as React from "react";


export default function SignUpComponent() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const isValidPassword = validatePassword(password);
    const passwordsAreMatching = passwordsMatch(password, confirmPassword);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Імітація надсилання на бекенд
        const userData = { username, email, password };
        alert(`Sending data to backend:${userData.username} and ${userData.password} and ${userData.email}`);

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            const result = await response.json();
            console.log("Response from backend:", result);
            alert("Login successful!");
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("Error occurred while submitting data.");
        }
    };


    return (
        <div className={"bg-[rgba(28,28,28,0.8)] w-[35vw] h-[77vh] px-10 rounded-3xl flex justify-center"}>
            <div className={''}>
                <SignUpChoiceButtons/>
                <form onSubmit={handleSubmit}>
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
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}