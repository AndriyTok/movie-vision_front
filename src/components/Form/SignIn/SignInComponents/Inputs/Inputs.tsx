import UsernameInput from "./UsernameInput.tsx";
import PasswordInput from "./PasswordInput.tsx";

interface InputProps {
    username: string
    setUsername: (value: string) => void
    password: string
    setPassword: (value: string) => void
}

export default function Inputs({username, setUsername, password, setPassword}: InputProps) {


    return (
        <div className={'w-[22vw] flex flex-wrap justify-center  bg-[rgba(28,28,28,0)]'}>
            <UsernameInput value={username} onChange={setUsername}/>
            <PasswordInput value={password} onChange={setPassword}/>
        </div>
    )
}