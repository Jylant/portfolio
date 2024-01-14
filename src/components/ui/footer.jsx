import { h } from 'preact';


import '../../styles/footer.scss';

const Footer = () => {
    const name = "Antti Jylhä";
    const email = "jylhant@gmail.com";
    const githubLink = "https://github.com/jylant";

    return (
        <>
        <footer className='footer'>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>GitHub: <a href={githubLink}>Jylant</a></p>
            <p>LinkedIn: <a href="">not yet</a></p>
            <p>© 2024 Antti Jylhä. All rights reserved.</p>
        </footer>
        </>
    );
};

export default Footer;
