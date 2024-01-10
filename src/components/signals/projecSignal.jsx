import { signal } from "@preact/signals";
import projectData from "../../assets/projects.json"

export const projectSignal = signal(projectData);

projectSignal.subscribe((projects) => {
    console.log('projects: ', projects);
    return projects.value;
});
