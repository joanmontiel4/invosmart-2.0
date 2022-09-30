import { Link } from 'react-router-dom';
import { iMenuOptions } from '../../interfaces/imenuoptions';
import './menu.scss';

export const Menu = ({ menuOptions }: { menuOptions: Array<iMenuOptions> }) => {
    return (
        <nav className="nav-menu">
            <ul className="tabs">
                {menuOptions.map((item, index) => (
                    <li key={index} className="tabs__item">
                        <Link to={item.path} className="tabs__link">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
