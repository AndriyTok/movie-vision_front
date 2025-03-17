import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function ChoiceButtons() {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState("sign_in");

    const handleNavigate = (path: string, button: string) => {
        setActiveButton(button);
        navigate(path)
    }
    return (
        <div className={'flex flex-nowrap justify-center align-center mb-10'}>
            <button
                className={`w-[11vw] text-white mt-3 mb-10 text-bold text-[1.0625em] py-2.5 border-b-2 ${
                    activeButton === "sign_up" ? "border-b-[#264F97]" : "border-b-[white]"
                } border-solid font-montserrat transition-all duration-300 focus:border-b-[#264F97] 
                hover:border-[#264F97]`}
                onClick={() => handleNavigate("/sign_up", "sign_up")}
                type='button'
            >
                Sign up
            </button>
            <button
                className={`w-[11vw] text-white mt-3 mb-10 text-bold text-[1.0625em] py-2.5 border-b-2 ${
                    activeButton === "sign_in" ? "border-b-[#264F97]" : "border-b-[white]"
                } border-solid font-montserrat transition-all duration-300 focus:border-b-[#264F97] 
                hover:border-[#264F97]`}
                onClick={() => handleNavigate("/sign_in", "sign_in")}
                type='button'
            >
                Sign in
            </button>
        </div>
    );
}