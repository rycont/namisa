export const Button: React.FC<{
    disabled?: boolean
    color?: "red" | "blue" | "green"
    elevation?: number
    roundness?: number
    size?: "small" | "medium" | "big"
    children: string
}> = (props) => {
    const classes = [props.disabled && ""]

    return (
        <button
            style={{
                fontSize: "4rem",
            }}
        >
            {props.children}
        </button>
    )
}
