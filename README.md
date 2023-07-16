# Prompt
Provide code that simulates an elevator. You are free to use any language.
Upload the completed project to GitHub for discussion during interview.
Document all assumptions and any features that weren’t implemented.
The result should be an executable, or script, that can be run with the following inputs and generate the following outputs.
* Inputs: [list of floors to visit] (e.g. elevator start=12 floor=2,9,1,32)
* Outputs: [total travel time, floors visited in order] (e.g. 560 12,2,9,1,32)
* Program Constants: Single floor travel time: 10

# Assumptions
* Negative floors are invalid inputs
* The elevator has essentially no upper limit of floors 
* The elevator staring floor is always the first value in the input array (i.e., the current floor does not persist between calls of visitFloors) 
* The elevator travels from floor to floor in the same order at the input (i.e., for input [1, 10, 5], the elevator travels to floor 1, then 10, and then 5; instead of floors 1, then 5, then 10.)

# Missing Features
The project sufficiently accomplishes the given prompt. Please see Enhancement Ideas below for additional features that would more closely simulate an elevator.

# Enhancement Ideas
* Add setting the top floor
* Add setting travel time per floor per simulation
* Add persisting current floor between calls to visitFloor
* Add users can send a request to the elevator to go up or down.*
    * When implemented the elevator would adhere to the following: 
        * When elevator is going up or down, it will stop at all the floors that the users requested.
        * If the elevator received a request of going down while it is going up, the elevator will go to the highest floor in the current requests, and then go down.
        * Users can send requests at anytime.

*While this doesn't really make sense for a script, it does align with how elevators work.

# To Run the Script
After cloning the repo locally:
1. Enter `npm init`
2. Enter `npm ci`
3. Enter `tsc`
4. Enter `npm run start <one or more floors to visit>`

# To Edit Script
After cloning the repo locally, to edit the script:
1. Enter `npm init`
2. Enter `npm ci`
3. Makes changes to the files.
4. Enter `tsc`