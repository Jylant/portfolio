import React from 'react';
import ProjectBlock from '../components/ProjectBlock';

const PortfolioContainer = () => {
    const projects = [
        // Add your project data here
        // Each project should have a unique key and relevant information
        // For example:
        // { id: 1, title: 'Project 1', description: 'Description 1' },
        // { id: 2, title: 'Project 2', description: 'Description 2' },
    ];

    return (
        <div>
            {projects.map((project) => (
                <ProjectBlock key={project.id} title={project.title} description={project.description} />
            ))}
        </div>
    );
};

export default PortfolioContainer;
