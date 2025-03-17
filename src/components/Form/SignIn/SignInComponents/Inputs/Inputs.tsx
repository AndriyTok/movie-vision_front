import UsernameInput from "./UsernameInput.tsx";
import PasswordInput from "./PasswordInput.tsx";

export default function Inputs(){


    return(
        <div className={'w-[22vw] flex flex-wrap justify-center  bg-[rgba(28,28,28,0)]'}>
            <UsernameInput/>
            <PasswordInput/>
        </div>
    )
}