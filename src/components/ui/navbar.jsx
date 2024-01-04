import { Link } from 'preact-router';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navlist'>
                <li className='navlink'>
                    <Link href="/">Home</Link>
                </li>
                <li className='navlink'>
                    <Link href="/bio">Bio</Link>
                </li>
                <li className='navlink'>
                    <Link href="/contact">Contact</Link>
                </li>
                <li className='navlink'>
                    <Link href="/portfolios">Portfolios</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
