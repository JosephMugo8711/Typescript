

function add(x: number ,y: number): number | string{
    if(x == 0){
        return "Invalid"
    }
    return x + y;

}
const addResult = add(5, 10);
console.log(addResult);


function makeName(firstName: string, lastName: string, middleName: string = "Alicia"){
    if (middleName) return firstName + " " + middleName + " " + lastName
    return firstName + " " + lastName

}

const fullName = makeName("Rev", "Jowamu")


console.log(fullName);


// its take a function that it will call
// it take parameters one and two  which are both of type string
function callFunc(func: (f: string, l: string, m?: string) => string,
parma1: string, 
param2: string)
{
    func(parma1, param2)
}

callFunc(makeName, "Rev", "Jowamu") 


function mul(x: number, y: number): number {
    return x * y;
}
function div(x: number, y: number): number {
    return x / y;
}

function applyFunc(
    // takes in a array of functions
    funcs: ((a: number, b: number) => number)[], 
    // takes in an array of tuple values
    values: [number, number][] ):  
    // return an array of numbers
    number[]{
        // we have results - array of numbers
    const results = [] as number[];
    // loop through all the diff functions that we have 
    for (let i = 0; i < funcs.length; i++) {
        // we have  some arguments equal to values at index i 
        const args = values[i]
        // we have function at function i , call with the two args that we have
        const result = funcs[i](args[0], args[1])
        results.push()
    }
    return results;
}

// returns an array of numbers
applyFunc([mul, div], [[1,2], [4, 5]]);