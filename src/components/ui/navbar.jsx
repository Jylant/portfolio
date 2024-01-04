import { Link } from 'preact-router';
import '../../styles/navbar.scss';

const Navbar = () => {
    const navItems = ['Home', 'About', 'Contact', 'Portfolio']; // Replace with your actual navigation items

    return (
        <nav className="navbar">
            <ul className="navlist">
                {navItems.map((item, index) => (
                    <li key={index} className="nav-item">
                        <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
