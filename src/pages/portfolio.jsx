import { h, Fragment } from 'preact';
import PortfolioContainer from '../components/containers/PortfolioContainer';

function Portfolio() {
    return (
        <Fragment>
            <h1>My Portfolio</h1>
            <p>Below you can see the projects in which I have participated.</p>
            <PortfolioContainer />
        </Fragment>
    );
}

export default Portfolio;
