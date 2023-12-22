import { Link } from 'preact-router';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li className='navlink'>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/bio">Bio</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/portfolios">Portfolios</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
