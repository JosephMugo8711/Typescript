declare let direction: "north" | "south" | "west" | 'east';
declare function move(distance: number, direction: "north" | "south" | "west" | 'east'): void;
declare let response: 200 | 400 | 201;
declare enum Size {
    Smallest = 100,
    Medium = 101,
    Large = 102
}
declare var size: Size;
declare enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
declare enum Description {
    SmallText = "sub zero mkuu"
}
