// typescript transpiles everything in ES3
let hello: string = "world";  // always specify types explicitly


// string at the end means this is the value that wlll be returned
const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
};

console.log(getFullName("Monster", "Lessons"));


