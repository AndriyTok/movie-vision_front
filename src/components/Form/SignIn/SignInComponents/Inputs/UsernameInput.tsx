export default function UsernameInput(){
    return(
        <div className={'w-full'}>
            <input
                className={
                    'border-2 border-[#464646] p-4 mb-5 w-full h-[3.1vh] bg-[rgba(28,28,28,0)] ' +
                    'rounded-3xl font-montserrat text-[0.8em] outline-none text-[#ffffff] !important' +
                    'transition-all duration-300 focus:border-[#264F97] hover:border-[#264F97]'
                }
                placeholder={'Username'}
                type="username"
            />
        </div>

    )
}