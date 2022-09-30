import './header.scss';

export const Header = ({
    appTitle,
    children,
}: {
    appTitle: string;
    children: JSX.Element;
}) => {
    return (
        <header className="header">
            <h1 className="header__title">{appTitle}</h1>
            {children}

            {/* <Login></Login> */}
        </header>
    );
};
