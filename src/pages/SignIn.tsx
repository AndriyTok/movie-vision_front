import FormComponent from "../components/Form/FormComponent.tsx";
import backgroundImage from "./form_assets/background.png";
import SignInComponent from "../components/Form/SignIn/SignInComponent.tsx";

export default function SignIn() {

    return (
        <div className="flex w-full h-screen"
             style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }}>
            <div className="w-full flex items-center justify-center">
                <FormComponent>
                    <SignInComponent/>
                </FormComponent>
            </div>
        </div>
    );
}
