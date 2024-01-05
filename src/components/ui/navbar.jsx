import { Link } from 'preact-router';
import '../../styles/navbar.scss';

const Navbar = () => {
    const navItems = ['Home', 'About', 'Portfolio']; 
    const navLinks = ['/', '/about', '/portfolio'];

    return (
        <nav className="navbar">
            <ul className="navlist">
                {navItems.map((item, index) => (
                    <li key={index} className="nav-item">
                        <Link activeClassname="active" href={navLinks[index]}>{item}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
