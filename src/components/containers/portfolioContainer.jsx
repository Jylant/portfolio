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
                {this.state.projects.map((project) => (
                    <ProjectBlock
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        url={project.url}
                    />
                ))}
            </div>
        );
    }
}

export default PortfolioContainer;