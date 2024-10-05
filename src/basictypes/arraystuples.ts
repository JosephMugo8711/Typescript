// Arrays
// Always explicitly specify the type that will be inside the array to ensure the best auto-completion and type-checking.
 
var arr = [["me"], ['you'], ["busy"]];  // nested arrays
arr[0].length;
console.log(arr);
var arr1: string[] = ["me", "you"]
console.log(arr1)


// tuples
// coordinate pair x,y
const coord: number[] = [1,2]

const coord1: [number, number] = [1, 2];
const coord2: [number, string] = [1, "2"];

const coord3: [number, number][] = [
    [1, 2],
    [3, 4],
    [5, 6]
];
const coord4: [number, number[]][] = [
    [1, [1, 2]],
    [-1, [3, 4]],
    [2, [5, 6]]
];
// type checks and hints
console.log(coord1[1])