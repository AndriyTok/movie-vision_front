export default function FormComponent() {
    return (
        <div>
            <h1 className={"text-6xl font-semibold mb-4 text-center"}>
                <span className={'text-[white]'}>Movie.</span>
                <span className={'text-[#264F97]'}>vision</span>
            </h1>

            <div className={"bg-white px-10 py-10 rounded-3xl border-2 border-gray-200"}>
                <div className={''}>
                    <div>
                        <input className={'w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'}
                               placeholder={'Username'}
                        />
                    </div>
                    <div>
                        <input className={'w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'}
                               placeholder={'Email'}
                        />
                    </div>
                    <div>
                        <input className={'w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'}
                               placeholder={'Password'}
                        />
                    </div>
                    <div>
                        <div>
                            <button>X</button>
                        </div>
                        <div>
                            <button>G</button>
                        </div>
                        <div>
                            <button>F</button>
                        </div>
                    </div>
                    <div>
                        <button>Sign Up</button>
                    </div>

                </div>
            </div>
        </div>

    )
}