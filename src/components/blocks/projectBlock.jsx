import React from 'react';
import { Fragment } from 'preact';
import PortfolioContainer from '../containers/portfolioContainer';
import '../../styles/portfolio.scss'

const ProjectBlock = (
    {
        title,
        description,
        image,
        url,
        myRole,
        technologies,
        myTasks,
        workDescription,
        challenges
    }) => {

        return (
            <>
                <h2>{title}</h2>
                <p>{description}</p>
                <img src={image} alt={title} /> <br />
                <a href={url}>Visit Project</a>
                <p>My Role in the project: {myRole}</p>
                <h3>Technologies used: </h3>
                <p>{technologies}</p>
                <h3>My Tasks:</h3>
                <p>{myTasks}</p>
                <h3>My Work Description:</h3>
                <p>{workDescription}</p>
                <h3>Challenges I faced:</h3>
                <p>{challenges}</p>
            </>
        );
};

export default ProjectBlock;
