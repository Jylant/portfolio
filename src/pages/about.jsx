import { h } from 'preact';
import Navbar from '../components/ui/navbar';
import Footer from '../components/ui/footer';
import style from '../styles/index.scss';

function About(language) {
    
    return (
        <div>
            <Navbar />
            <h1>My Bio</h1>
            <p>Write your bio here...</p>
            <Footer />
        </div>
    );
}

export default About;
