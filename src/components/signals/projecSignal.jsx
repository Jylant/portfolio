import { signal } from "@preact/signals";
import projectData from "../../assets/data/projects.json"

export const projectSignal = signal(projectData);
