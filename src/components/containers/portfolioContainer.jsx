import { h, Component } from 'preact';
import ProjectBlock from '../blocks/projectBlock.jsx';
import { projectSignal } from '../signals/projecSignal.jsx';

class PortfolioContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        projectSignal.subscribe((projects) => {
            this.setState({ projects });
        });
    }

    componentWillUnmount() {
        projectSignal.unsubscribeAll();
    }

    render() {
        return (
            <div>
                {this.state.projects.map((project, index) => (
                    <ProjectBlock className="project-block"
                        key={index}
                        title={project.name}
                        description={project.description}
                        image={project.image}
                        url={project.link}
                        myRole={project.myRole}
                        technologies={project.tech}
                        myTasks={project.tasks}
                        workDescription={project.workDescription}
                        challenges={project.challenges}
                    />
                ))}
            </div>
        );
    }
}

export default PortfolioContainer;