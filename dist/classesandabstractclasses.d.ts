declare class Human {
    protected name: string;
    constructor(name: string);
    greet(): void;
    getName(): string;
    setName(name: string): void;
}
declare class Employee1 extends Human {
    callMe(): void;
}
declare const p1: Human;
