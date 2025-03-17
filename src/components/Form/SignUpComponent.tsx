import x from "./form_assets/x.png";
import google from "./form_assets/google.png";
import fb from "./form_assets/fb.png";

export default function SignUpComponent() {
    return (
        <div className={"bg-[rgba(28,28,28,0.8)] w-[35vw] h-[77vh] px-10 rounded-3xl flex justify-center"}>
            <div className={''}>
                <div className={'flex flex-nowrap justify-center align-center mb-10'}>
                    <button className={'w-[11vw] text-white mt-3 mb-10 text-bold text-[1.0625em] py-2.5 ' +
                        'border-b-2 border-b-[#264F97] border-solid font-montserrat '}>Sign up
                    </button>
                    <button className={'w-[11vw] text-white mt-3 mb-10 text-bold text-[1.0625em] py-2.5 ' +
                        'border-b-2 border-b-[white] border-solid font-montserrat'}>Sign in
                    </button>

                </div>
                <div className={'w-[22vw] flex flex-wrap justify-center '}>
                    <div className={'w-full'}>
                        <input
                            className={
                                'border-2 border-[#464646] p-4 mb-5 w-full h-[3.1vh] bg-[rgba(28,28,28,0.9)] ' +
                                'rounded-3xl font-montserrat text-[0.8em] outline-none text-[#ffffff] '
                            }
                            placeholder={'Username'}
                        />
                    </div>
                    <div className={'w-full'}>
                        <input
                            className={
                                'border-2 border-[#464646] p-4 mb-5 w-full h-[3.1vh] bg-[rgba(28,28,28,0.9)] ' +
                                'rounded-3xl font-montserrat text-[0.8em] outline-none text-[#ffffff] '
                            }
                            placeholder={'Email'}
                        />
                    </div>


                    <div
                        className={'w-full flex justify-between items-center border-2 border-[#464646] p-4 mb-5 h-[3.1vh] ' +
                            'bg-[rgba(28,28,28,0.9)] rounded-3xl font-montserrat relative'}>
                        <input
                            className={
                                'h-[3.1vh] w-[19.5vw] bg-[rgba(28,28,28,0.9)] font-montserrat text-[0.8em] ' +
                                'outline-none text-[#ffffff] '
                            }
                            type={'password'}
                            placeholder={'Password'}
                        />
                        <span
                            className="absolute text-[#464646] right-3 top-1/2 transform -translate-y-1/2
                                cursor-pointer"
                            id="togglePassword" // Додаємо id для доступу до елемента в JavaScript
                        >
                                &#x1F441; {/* Код Unicode для іконки "око" */}
                            </span>

                    </div>
                    <div
                        className={'w-full flex justify-between items-center border-2 border-[#464646] p-4 mb-5 ' +
                            'h-[3.1vh] bg-[rgba(28,28,28,0.9)] rounded-3xl font-montserrat relative'}>
                        <input
                            className={
                                'h-[3.1vh] w-[19.5vw] bg-[rgba(28,28,28,0.9)] font-montserrat text-[0.8em] ' +
                                'outline-none text-[#ffffff] '
                            }
                            type={'password'}
                            placeholder={'Confirm Password'}
                        />
                        <span
                            className="absolute text-[#464646] right-3 top-1/2 transform -translate-y-1/2
                                cursor-pointer"
                            id="togglePassword" // Додаємо id для доступу до елемента в JavaScript
                        >
                                &#x1F441; {/* Код Unicode для іконки "око" */}
                            </span>

                    </div>

                </div>
                <div className="flex justify-center items-center w-full gap-4 mt-7 mb-7">
                    <button className="w-12 h-12 bg-center bg-cover"
                            style={{backgroundImage: `url(${x})`}}></button>
                    <button className="w-12 h-12 bg-center bg-cover"
                            style={{backgroundImage: `url(${google})`}}></button>
                    <button className="w-12 h-12 bg-center bg-cover"
                            style={{backgroundImage: `url(${fb})`}}></button>
                </div>

                <div>
                    <button
                        className="w-full h-[5.1vh] bg-gradient-to-r from-[#00AEEF] to-[#264F97]
                            rounded-3xl font-montserrat text-[0.8em] outline-none text-black text-center
                            flex items-center justify-center"
                    >
                        Sign Up
                    </button>
                </div>

            </div>
        </div>
    )
}