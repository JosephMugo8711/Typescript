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
