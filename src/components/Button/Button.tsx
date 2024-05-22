
import './Button.css'

type PropsButton ={
    children: string | number | readonly string[] | undefined ;
    onSubmit:"submit" | "button" | "reset" | undefined
}

export function Button({ children, onSubmit }:PropsButton) {
    return (
        <button type={onSubmit} className="button">
            {children}
        </button>
    )
}