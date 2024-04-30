// Define an object representing different statuses with numerical values
// Each status represents a stage of completion, with 0 for not started, 1 for in progress, and 2 for done
const statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2,
};

// Print the value associated with the 'inProgress' status
console.log(statuses.inProgress);

// Define an enum 'Status' with three members: NotStarted, InProgress, and Done
enum Status {
    NotStarted,    // 0
    InProgress,    // 1
    Done           // 2
}

// Declare a variable 'notStartedStatus' of type 'Status' and initialize it with the value 'NotStarted'
const notStartedStatus: Status = Status.NotStarted;

// Attempt to reassign 'notStartedStatus' to the value 'Done' (commented out to avoid error)
// notStartedStatus = Status.Done;

// Print the value associated with the 'InProgress' status
console.log(Status.InProgress);
