interface SignInButtonProps {
    disabled: boolean;
}

export default function SignInButton({disabled}: SignInButtonProps) {
    return (
        <div>
            <button
                type="submit"
                disabled={disabled}
                className={`w-full h-[5.1vh] bg-gradient-to-r mb-7 from-[#00AEEF] to-[#264F97]
                            rounded-3xl font-montserrat text-[0.8em] outline-none text-black text-center
                            flex items-center justify-center hover:from-[#008ecf] hover:to-[#1e3f7f]
                            ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            >
                Sign In
            </button>
        </div>
    )
}