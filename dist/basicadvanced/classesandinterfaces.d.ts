interface Animal1 {
    speak(): void;
}
declare class Dog1 implements Animal1 {
    private name;
    private color;
    constructor(name: string, color: string);
    speak(): void;
    test(): number;
}
declare class Cat1 implements Animal1 {
    speak(): void;
}
declare const dog1: Animal1;
declare const cat2: Cat1;
declare const animals: Animal1[];
declare function makesSound(animal: Animal1): void;
