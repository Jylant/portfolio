import { signal } from "@preact/signals";
import projectData from "../../assets/projects.json"

export const projectSignal = signal(projectData);
