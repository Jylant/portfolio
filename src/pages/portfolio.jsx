import { h, Fragment } from 'preact';
import PortfolioContainer from '../components/containers/PortfolioContainer';
import Navbar from '../components/ui/navbar';
import Footer from '../components/ui/footer';

function Portfolio() {
    return (
        <>
            <Navbar />
            <h1>My Portfolio</h1>
            <p>Below you can see the projects in which I have participated.</p>
            <PortfolioContainer />
            <Footer />
        </>
    );
}

export default Portfolio;
