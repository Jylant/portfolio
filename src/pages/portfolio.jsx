import PortfolioContainer from '../components/containers/portfolioContainer';
import '../styles/portfolio.scss'

function Portfolio() {
    return (
        <>
        <h1>My Portfolio</h1>
        <p className='undertext'>Below you can see most of the projects in which I have participated.</p>
            <PortfolioContainer />
        </>
    );
}

export default Portfolio;
