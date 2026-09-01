import type { ReactNode } from "react";

type InputContainerProps = {
    children: ReactNode,
}

function InputContainer({ children }: InputContainerProps) {
    return (
        <div className="input-container">
            {children}
        </div>
    )
}

export default InputContainer   