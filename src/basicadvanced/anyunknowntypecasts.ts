let z: any = 1

let w: unknown = 2

if (typeof w == "number"){
    const result = w + 1;
} else if (typeof w == "string"){
    const result = w.length;
}

//type casting


// treat w as if its the type number
const result2 = (w as number) + 1

const result3 = (w as string) + "string"

const result4 = (w as number[][])



function processFeedback(input: any): void {
    // Assume we can perform any operation without explicit type checks
    console.log(`Processing: ${input}`);
    // Further processing logic
}

// call processFeedback function with any type of input because type is any
// This can be a string, number, file, etc
processFeedback(z);
processFeedback(w);
processFeedback("Hello World");
processFeedback(123);
processFeedback(new Blob());
processFeedback(new Date());


// let us use type unknown
function becomeBrilliant(input: unknown): void{
    // Now we can perform explicit type checks
    if (typeof input === "string"){
        console.log(`Becoming brilliant: ${input}`);
    } else {
        console.log("I'm not a string, I don't know how to become brilliant.");
    }
    // Further processing logic

}

becomeBrilliant(z);



function processFeedback3(input: unknown): void {
    //checking all the inputs we might have
    
    if (typeof input === 'string'){
        console.log(`Processing: ${input}`);
    } else if (typeof input === 'number'){
        console.log(`Processing: ${input} as a number`);
    } else if (input instanceof Blob) {
        console.log(`Processing: ${input} as a file`);
    } else {
        console.log("Unsupported type of input");
    }
}

// THis ensures that opeartions are safe and based on the actual type of input
processFeedback3("Great service");
processFeedback3(123);
processFeedback3(new Blob());