import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ChoiceButton from "../../CommonComponents/ChoiceButton.tsx";

export default function SignInChoiceButtons() {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState("sign_in");

    const handleNavigate = (path: string, button: string) => {
        setActiveButton(button);
        navigate(path)
    }

    return(
        <div className={'flex flex-nowrap justify-center align-center mb-10'}>
            <ChoiceButton
                isActive={activeButton === 'sign_up'}
                text={'Sign up'}
                onClick={() => handleNavigate("/sign_up", 'sign_up')}/>
            <ChoiceButton
                isActive={activeButton === 'sign_in'}
                text={'Sign in'}
                onClick={() => handleNavigate("/sign_in", 'sign_in')}/>
        </div>
    )
}