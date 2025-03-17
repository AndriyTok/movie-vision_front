import * as React from "react";

interface InputsProps {
    username: string;
    setUsername: (username: string) => void;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    confirmPassword: string;
    setConfirmPassword: (confirmPassword: string) => void;
    isValidPassword: boolean;
    passwordsAreMatching: boolean;
}

export default function Inputs({
                                   username, setUsername, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword,
                                   isValidPassword, passwordsAreMatching
                               }: InputsProps) {
    //states for the form

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    return (

        <div className={'w-[22vw] flex flex-wrap justify-center '}>
            <div className={'w-full'}>
                <input
                    className={
                        'border-2 border-[#464646] p-4 mb-5 w-full h-[3.1vh] bg-[rgba(28,28,28,0)] ' +
                        'rounded-3xl font-montserrat text-[0.8em] outline-none text-[#ffffff] ' +
                        'transition-all duration-300 focus:border-[#264F97] hover:border-[#264F97]'
                    }
                    placeholder="Username"
                    type="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className={'w-full'}>
                <input
                    className={
                        'border-2 border-[#464646] p-4 mb-5 w-full h-[3.1vh] bg-[rgba(28,28,28,0)] ' +
                        'rounded-3xl font-montserrat text-[0.8em] outline-none text-[#ffffff] ' +
                        'transition-all duration-300 focus:border-[#264F97] hover:border-[#264F97]'
                    }
                    placeholder='Email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>


            <div
                className={'w-full flex justify-between items-center border-2 border-[#464646] p-4 mb-5 h-[3.1vh] ' +
                    'bg-[rgba(28,28,28,0)] rounded-3xl font-montserrat relative transition-all duration-300' +
                    ' focus:border-[#264F97] hover:border-[#264F97]'}>
                <input
                    className={
                        'h-[3.1vh] w-[19.5vw] bg-[rgba(28,28,28,0)] font-montserrat text-[0.8em] ' +
                        'outline-none text-[#ffffff]'
                    }
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={handlePasswordChange}
                />

                <span
                    className="absolute text-[#464646] right-3 top-1/2 transform -translate-y-1/2
                                cursor-pointer"
                    id="togglePassword">
                            &#x1F441;
                        </span>


            </div>


            <div
                className={'w-full flex justify-between items-center border-2 border-[#464646] p-4 mb-5 ' +
                    'h-[3.1vh] bg-[rgba(28,28,28,0)] rounded-3xl font-montserrat relative ' +
                    'transition-all duration-300 focus:border-[#264F97] hover:border-[#264F97]'}>
                <input
                    className={
                        'h-[3.1vh] w-[19.5vw] bg-[rgba(28,28,28,0)] font-montserrat text-[0.8em] ' +
                        'outline-none text-[#ffffff]'
                    }
                    type='password'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}/>

                {!passwordsAreMatching && confirmPassword.length > 0 && (
                    <p className='text-red-500 text-sm w-full font-montserrat '>
                        Passwords do not match!
                    </p>
                )}

                <span
                    className="absolute text-[#464646] right-3 top-1/2 transform -translate-y-1/2
                                cursor-pointer"
                    id="togglePassword">

                                &#x1F441;
                </span>

            </div>
            {!isValidPassword && password.length > 0 && (
                <div className="text-red-500 text-sm w-full font-montserrat flex justify-between
                        mb-5 text-center border-2 border-[#464646] rounded-3xl p-4 bg-[rgba(28,28,28,0.9)]">
                    Password must be 8+ characters, include 1 uppercase letter and number!
                </div>
            )}

        </div>
    )
}
