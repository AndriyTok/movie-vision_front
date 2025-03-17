import { ReactNode } from "react";

interface FormComponentProps {
    children: ReactNode;
}
export default function FormComponent({children}:FormComponentProps) {
    return (
        <div>
            <h1 className={"text-6xl mb-4 text-center font-montserrat font-extrabold text-[2.7em]"}>
                <span className={'text-[white]'}>Movie.</span>
                <span className={'text-[#264F97]'}>vision</span>
            </h1>
            {children}

        </div>

    )
}