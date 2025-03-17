import ChoiceButtons from "./SignInComponents/ChoiceButtons.tsx";
import SocialMediaButtons from "../SocialMediaButtons.tsx";
import Inputs from "./SignInComponents/Inputs/Inputs.tsx";
import SignInButton from "./SignInComponents/SignInButton.tsx";
import ForgotPassword from "./SignInComponents/ForgotPassword.tsx";
// import {useState} from "react";
// import * as React from "react";



export default function SignInComponent() {

    return (
        <div className={"bg-[rgba(28,28,28,0.8)] w-[35vw] h-[77vh] px-10 rounded-3xl flex justify-center"}>
            <div className={''}>
                <ChoiceButtons/>
                <Inputs/>
                <SocialMediaButtons/>
                <SignInButton/>
                <ForgotPassword/>
            </div>
        </div>
    )
}