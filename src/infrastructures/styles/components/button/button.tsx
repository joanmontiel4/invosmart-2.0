export const Button = ({
    text,
    buttonClick,
}: {
    text: string;
    buttonClick: Function;
}) => {
    return (
        <button
            onClick={(ev) => {
                ev.preventDefault();
                buttonClick();
            }}
        >
            {text}
        </button>
    );
};
