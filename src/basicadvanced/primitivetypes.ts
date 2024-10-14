// numbers

let b: number = 2;
console.log(b);

// strings
let c: string = "Master Jowamu Rich Kid";
console.log(c);

// booleans
let d: boolean = false;
console.log(d);

// null
let e: null = null;
console.log(e);

// undefined
let f: undefined = undefined;
console.log(f);

// void
function g(): void {
    console.log("This function doesn't return anything.");
}

g();

// never
function h(): never {
    throw new Error("This function will never return.");
}

let x: boolean;

x = false;

let result = null; 

result = 0;

let result1: number | undefined = undefined;

result1 = 10;

console.log(result1);


