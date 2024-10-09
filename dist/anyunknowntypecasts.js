let z = 1;
let w = 2;
if (typeof w == "number") {
    const result = w + 1;
}
else if (typeof w == "string") {
    const result = w.length;
}
const result2 = w + 1;
const result3 = w + "string";
const result4 = w;
function processFeedback(input) {
    console.log(`Processing: ${input}`);
}
processFeedback(z);
processFeedback(w);
processFeedback("Hello World");
processFeedback(123);
processFeedback(new Blob());
processFeedback(new Date());
function becomeBrilliant(input) {
    if (typeof input === "string") {
        console.log(`Becoming brilliant: ${input}`);
    }
    else {
        console.log("I'm not a string, I don't know how to become brilliant.");
    }
}
becomeBrilliant(z);
function processFeedback3(input) {
    if (typeof input === 'string') {
        console.log(`Processing: ${input}`);
    }
    else if (typeof input === 'number') {
        console.log(`Processing: ${input} as a number`);
    }
    else if (input instanceof Blob) {
        console.log(`Processing: ${input} as a file`);
    }
    else {
        console.log("Unsupported type of input");
    }
}
processFeedback3("Great service");
processFeedback3(123);
processFeedback3(new Blob());
