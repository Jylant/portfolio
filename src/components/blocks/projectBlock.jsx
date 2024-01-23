import React from 'react';

const ProjectBlock = (
    {
        title,
        description,
        images,
        altText,
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
                <ul className='pics'>
                    {images.map((image, index) => (
                        <li key={index}><img src={image} alt={altText[index]} /><br /></li>
                    ))}
                </ul>
                <a href={url}>Visit Project</a>
                <h3>My Role in the project</h3>
                <p>{myRole}</p>
                <h3>Technologies used: </h3>
                <p>{technologies}</p>
                <h3>My Tasks:</h3>
                <p>My tasks for the project were:</p>
                <ul className='tasks'>
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
