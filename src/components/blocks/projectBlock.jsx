import React from 'react';
import { Fragment } from 'preact';

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
        const tasks = Object.values(myTasks)
        return (
            <div className='project-block'>
                <h2>{title}</h2>
                <p>{description}</p>
                <img src={image} alt={title} /> <br />
                <a href={url}>Visit Project</a>
                <p>My Role in the project: {myRole}</p>
                <h3>Technologies used: </h3>
                <p>{technologies}</p>
                <h3>My Tasks:</h3>
                <p>My tasks for the project were:</p>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
                <h3>My Work Description:</h3>
                <p>{workDescription}</p>
                <h3>Challenges I faced:</h3>
                <p>{challenges}</p>
            </div>
        );
};

export default ProjectBlock;
