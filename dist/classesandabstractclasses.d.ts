declare class Human {
    protected name: string;
    constructor(name: string);
    private greet;
    getName(): string;
    setName(name: string): void;
}
declare class Employee1 extends Human {
    callMe(): void;
}
declare const p1: Human;
declare abstract class Animal {
    abstract sound(): void;
    abstract makeSound(duration: number): void;
    move(duration: number): void;
}
declare class Dog extends Animal {
    sound(): void;
    makeSound(duration: number): void;
}
declare class Cat extends Animal {
    sound(): void;
    makeSound(duration: number): void;
}
declare const dog: Dog;
