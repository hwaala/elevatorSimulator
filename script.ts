import { exit } from "process";
import { visitFloors } from "./elevator";

// Access command-line arguments starting from index 2
const args = process.argv.slice(2);
const floorsToVisit = args.map(Number); // Remaining arguments are floors to visit

// Validate the input
if (floorsToVisit.length === 0) {
    console.log('Invalid input. Please provide at least one floor.');
    exit(1)
}

// Execute elevator simulation
try {
    console.log(visitFloors(floorsToVisit));
}
catch (error) {
    console.log(error.message)
    exit(1)
}