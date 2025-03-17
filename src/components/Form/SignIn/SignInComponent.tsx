import ChoiceButtons from "./SignInComponents/ChoiceButtons.tsx";
import SocialMediaButtons from "../SocialMediaButtons.tsx";
import Inputs from "./SignInComponents/Inputs/Inputs.tsx";
import SignInButton from "./SignInComponents/SignInButton.tsx";
import ForgotPassword from "./SignInComponents/ForgotPassword.tsx";
import {useEffect, useState} from "react";
import * as React from "react";

export default function SignInComponent() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(true);

    // Перевірка валідності при зміні полів
    useEffect(() => {
        setIsValid(username.trim() !== "" && password.trim() !== "");
    }, [username, password]);

    // Обробка сабміту форми
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Імітація надсилання на бекенд
        const userData = { username, password };
        alert(`Sending data to backend:${userData}`);

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
                <form onSubmit={handleSubmit}>
                <ChoiceButtons />
                <Inputs
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                />
                <SocialMediaButtons />
                <SignInButton disabled={!isValid}/>
                <ForgotPassword/>
                </form>
            </div>
        </div>
    )
}