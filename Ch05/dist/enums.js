// Define an object representing different statuses with numerical values
// Each status represents a stage of completion, with 0 for not started, 1 for in progress, and 2 for done
var statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2,
};
// Print the value associated with the 'inProgress' status
console.log(statuses.inProgress);
// Define an enum 'Status' with three members: NotStarted, InProgress, and Done
var Status;
(function (Status) {
    Status[Status["NotStarted"] = 0] = "NotStarted";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done"; // 2
})(Status || (Status = {}));
// Declare a variable 'notStartedStatus' of type 'Status' and initialize it with the value 'NotStarted'
var notStartedStatus = Status.NotStarted;
// Attempt to reassign 'notStartedStatus' to the value 'Done' (commented out to avoid error)
// notStartedStatus = Status.Done;
// Print the value associated with the 'InProgress' status
console.log(Status.InProgress);
