import { signal } from "@preact/signals";
import projectData from "./projectData.json"; // Assuming projectData.json contains the project data

const projectSignal = signal(projectData);

// Subscribe to projectSignal
projectSignal.subscribe((data) => {
    // Handle the signal data here
    console.log("Received projectSignal:", data);
});

// Emit projectSignal
projectSignal.emit({ project: "Project A", data: { /* project data from JSON */ } });

// Unsubscribe from projectSignal
projectSignal.unsubscribeAll();
