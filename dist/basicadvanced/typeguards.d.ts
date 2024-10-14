type StringOrNumber = string | number;
declare function add1(value: StringOrNumber): StringOrNumber;
declare class Dog3 {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string);
}
declare class Cat3 {
    firstName: string;
    constructor(firstName: string);
}
declare function getName(animal: Cat3 | Dog3): string;
declare function getName1(animal: Cat3 | Dog3): string;
declare function isDog(pet: Dog3 | Cat3): pet is Dog3;
declare function getPetName(pet: Dog3 | Cat3): string;
declare const dog6: Dog3;
declare const cat: Cat3;
