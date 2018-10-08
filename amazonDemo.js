// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function cellCompete(states, days)
{
    while(days) {
        days--;
        states = getNewStates(states);
    }

    console.log(states);
    // WRITE YOUR CODE HERE 
}
// FUNCTION SIGNATURE ENDS

let states = [1,0,0,0,0,1,0,0];
let days = 1;

function getNewStates(states) {
    var newStates = [0,0,0,0,0,0,0,0];
    //I preffer to deal with new first and last case outside the for, so I do not have to be checking for them in every loop
    newStates[0] = states[1] == 0 ? 0 : 1;

    newStates[states.length - 1] = states[states.length - 2] == 0 ? 0 : 1;

    for(var i = 1; i < states.length - 1; i++) {
        newStates[i] = states[i+1] == states[i-1] ? 0 : 1;
    }

    return newStates;
}
cellCompete(states,days);