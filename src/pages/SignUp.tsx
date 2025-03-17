import FormComponent from "../components/Form/FormComponent.tsx";
import backgroundImage from './form_assets/background.png';
import SignUpComponent from "../components/Form/SignUpComponent.tsx";

export default function SignUp(){


    return (
        <div className={"flex w-full h-screen "}
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <div className={"w-full flex items-center justify-center"}>
                <FormComponent>
                    <SignUpComponent></SignUpComponent>
                </FormComponent>
            </div>

        </div>
    )
}