import { h, Component } from 'preact';
import ProjectBlock from '../blocks/projectBlock.jsx';
import { signal } from '@preact/signals';
import projectData from '../../assets/projects.json';

const projectSignal = signal(projectData);

const PortfolioContainer = () => {
    const projects = Object.values(projectSignal.value);
    console.log('projectSignal: ', projects);
    return (
        <>
            {projects.map((project, index) => (
                console.log('project: ', project),
                <ProjectBlock
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    url={project.url}
                    myRole={project.myRole}
                    technologies={project.technologies}
                    myTasks={project.myTasks}
                    workDescription={project.workDescription}
                    challenges={project.challenges}
                />
            ))}
        </>
    );
}

export default PortfolioContainer;