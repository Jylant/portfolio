import { Fragment } from 'preact';
import ProjectBlock from '../blocks/projectBlock.jsx';
import { signal } from '@preact/signals';
import projectData from '../../assets/projects.json';

const projectSignal = signal(projectData);

const PortfolioContainer = () => {
    const projects = Object.values(projectSignal.value);
    console.log('projectSignal: ', projects);
    return (
        <div className='project-container'>
            {projects.map((project, index) => (
                <ProjectBlock
                    key={index}
                    title={project.name}
                    description={project.description}
                    images={project.images}
                    url={project.url}
                    myRole={project.role}
                    technologies={project.tech}
                    myTasks={project.tasks}
                    workDescription={project.workDescription}
                    challenges={project.challenges}
                />
            ))}
        </div>
    );
}

export default PortfolioContainer;