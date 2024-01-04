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
            <p>© 2024 Antti Jylhä. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
