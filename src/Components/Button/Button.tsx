export const Button: React.FC<{ onClickCallback: () => void, children: string }> = ({ onClickCallback, children }) => {
    return (
        <button onClick={ onClickCallback }>
            { children }
        </button>
    )
}


