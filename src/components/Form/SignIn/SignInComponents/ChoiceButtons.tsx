import {useNavigate} from "react-router-dom";

export default function ChoiceButtons(){
    const navigate = useNavigate();

    return(
        <div className={'flex flex-nowrap justify-center align-center mb-10'}>
            <button className={'w-[11vw] text-white mt-3 mb-10 text-bold text-[1.0625em] py-2.5 ' +
                'border-b-2 border-b-[white] border-solid font-montserrat transition-all' +
                'duration-300 focus:border-b-[#264F97] hover:border-[#264F97]'}
                    onClick={() => navigate("/sign_up")}

            >Sign up
            </button>
            <button className={'w-[11vw] text-white mt-3 mb-10 text-bold text-[1.0625em] py-2.5 ' +
                'border-b-2 border-b-[white] border-solid font-montserrat transition-all' +
                'duration-300 focus:border-b-[#264F97] hover:border-[#264F97]'}
            >Sign in
            </button>

        </div>
    )
}