import React from 'react';
import '../styles/index.scss';
import Navbar from '../components/ui/navbar.jsx';
import Footer from '../components/ui/footer.jsx';

const Home = () => {
    return (
        <>
        <Navbar />
            <h1>Welcome to My Portfolio</h1>
            <p>This is the index page of my portfolio website.</p>
            {/* Add your content here */}
        <Footer />
        </>
    );
};

export default Home;
