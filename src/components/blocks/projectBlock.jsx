import React from 'react';
import PortfolioContainer from '../containers/portfolioContainer';

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
        // parse the technologies string into an array
        const techArray = technologies.split(', ');

        return (
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <img src={image} alt={title} />
                <a href={url}>Visit Project</a>
                <p>My Role in the project: {myRole}</p>
                <h3>Technologies used: </h3>
                <ul>
                    {techArray.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
                <h3>My Tasks:</h3>
                <p>{myTasks}</p>
                <h3>My Work Description:</h3>
                <p>{workDescription}</p>
                <h3>Challenges I faced:</h3>
                <p>{challenges}</p>
            </div>
        );
};

export default ProjectBlock;
