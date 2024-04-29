// typescript transpiles everything in ES3
var hello = "world"; // always specify types explicitly
// string at the end means this is the value that wlll be returned
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Monster", "Lessons"));
