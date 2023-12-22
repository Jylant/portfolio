import { signal } from "@preact/signals";
const projectSignal = signal();

// Subscribe to projectSignal
projectSignal.subscribe((data) => {
    // Handle the signal data here
    console.log("Received projectSignal:", data);
});

// Emit projectSignal
projectSignal.emit("Hello, world!");

// Unsubscribe from projectSignal
projectSignal.unsubscribeAll();
