// rest parameters 

// create a rest parameter 
// ... collect as many values as posible, store them inside an array
// usimg array type number[]

function  sum(str: string, ...numbers: number[]) {

}

sum("hello", 1,2,3)
sum("")
sum("", 1,2,3,4,55,44,66)


// overloaded functions
// function getItemLength(value: string | string[], value2: string | string[]) {

// }

function getItemLength(name: string): number;
function getItemLength(names: string[]): string;
// this function can be called in one of the following ways with name or names
// define all valid ways to callthis function
function getItemLength(nameOrNames: unknown): unknown {
    if (typeof nameOrNames === "string") {
        return nameOrNames.length;
    } else if (Array.isArray(nameOrNames)) {
        return "Hello Jowamu"
    } 
    return 0
}

// there are multiple ways to call this function because its overloaded
getItemLength(["", ""]);
getItemLength("hello");
