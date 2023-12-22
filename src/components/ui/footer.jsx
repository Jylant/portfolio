import { h } from 'preact';
import { github } from 'react-icons-kit/icomoon/github';

import '../../styles/footer.scss';

const Footer = () => {
    const name = "Antti Jylhä";
    const email = "jylhant@gmail.com";
    const githubLink = "https://github.com/jylant";

    return (
        <footer>
            <p>This is the footer.</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>GitHub: <a href={githubLink}>{github}</a></p>
            <p>© 2023 Your Name. All rights reserved.</p> // Copyright notice
        </footer>
    );
};

export default Footer;
