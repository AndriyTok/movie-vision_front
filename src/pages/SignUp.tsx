import SignUpForm from "../components/Form/SignUpForm.tsx";
import backgroundImage from './form_assets/background.png';

export default function SignUp(){


    return (
        <div className={"flex w-full h-screen "}
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <div className={"w-full flex items-center justify-center"}>
                <SignUpForm/>
            </div>

        </div>
    )
}