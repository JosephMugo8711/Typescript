
//  Literals

let direction: "north" | "south" | "west" | 'east';

direction = "north";


function move(distance: number, direction: "north" | "south" | "west" | 'east') {
    // implementation
    console.log(`Moved ${distance} units ${direction}`);
}

move(5, "north");


let response: 200 | 400 | 201;

response = 200;

switch (response) {
    case 200:
        console.log("Bad Request");
        break;
        console.log("Bad Request");
        break;
        console.log("Created");
        break;
    default:
        console.log("Unknown response");
}

// Numeric Enums

enum Size {
    Smallest = 100,
    Medium,
    Large
}

var size: Size = Size. Smallest;

if (size === Size.Smallest) {
    console.log("Size is smallest");

}

// String Enums
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
var value: Direction;

enum Description {
    SmallText = "sub zero mkuu"
}

console.log(Description.SmallText)