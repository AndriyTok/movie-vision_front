interface ChoiceButtonProps {
    isActive: boolean;
    text: string;
    onClick: () => void;
}

export default function ChoiceButton({isActive, text, onClick}: ChoiceButtonProps) {
    return(
        <button
            className={`w-[11vw] text-white mt-3 mb-10 text-bold text-[1.0625em] py-2.5 border-b-2 ${
                isActive ? "border-b-[#264F97]" : "border-b-[white]"
            } border-solid font-montserrat transition-all duration-300 focus:border-b-[#264F97] 
                hover:border-[#264F97]`}
            onClick={onClick}
            type='button'
        >
            {text}
        </button>
    )
}