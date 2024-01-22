import React from 'react';
import '../styles/index.scss';
import Navbar from '../components/ui/navbar.jsx';
import Footer from '../components/ui/footer.jsx';

const introduction = ('I am Antti Jylhä, a second year student in Oulu University of Applied Sciences, and I made these pages to demonstrate my programmming ventures')
const disclaimer = 'These pages are only in english for now, because it\'s the most prevalent language in the field and I have time constraints'

const Home = () => {
    return (
        <>
        <h1>Welcome to My Portfolio</h1>
        <p>Greetings!</p>
        <p>{introduction}</p>
        <p>{disclaimer}</p>
        </>
    );
};

export default Home;
