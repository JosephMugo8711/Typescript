// 1. Using 'typeof' for StringOrNumber type

type StringOrNumber = string | number;

function add1(value: StringOrNumber): StringOrNumber {
    if (typeof value === 'number') {
        return value + 1;
    } else {
        // Only 'string' is left since the type is constrained to `StringOrNumber`.
        return value.toUpperCase();
    }
}

// 2. Using 'instanceof' for class type checks

class Dog3 {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Cat3 {
    firstName: string;
    constructor(firstName: string) {
        this.firstName = firstName;
    }
}

function getName(animal: Cat3 | Dog3): string {
    if (animal instanceof Cat3) {
        return `Cat: ${animal.firstName}`;
    } else if (animal instanceof Dog3) {
        return `Dog: ${animal.firstName} ${animal.lastName}`;
    } else {
        throw new Error('Unsupported animal type');
    }
}

// 3. Using 'in' for property-based type checking

function getName1(animal: Cat3 | Dog3): string {
    if ('lastName' in animal) {
        // This means the animal is a Dog3
        return `Dog: ${animal.firstName} ${animal.lastName}`;
    } else {
        // This means the animal is a Cat3
        return `Cat: ${animal.firstName}`;
    }
}

// 4. Using 'is' keyword for a type predicate

function isDog(pet: Dog3 | Cat3): pet is Dog3 {
    return 'lastName' in pet;
}

// Usage example of isDog function
function getPetName(pet: Dog3 | Cat3): string {
    if (isDog(pet)) {
        return `Dog: ${pet.firstName} ${pet.lastName}`;
    } else {
        return `Cat: ${pet.firstName}`;
    }
}

// Example usage

const dog6 = new Dog3("Buddy", "Smith");
const cat = new Cat3("Whiskers");

console.log(add1(5));           // Output: 6
console.log(add1("hello"));     // Output: HELLO

console.log(getName(dog6));      // Output: Dog: Buddy Smith
console.log(getName(cat));      // Output: Cat: Whiskers

console.log(getName1(dog6));     // Output: Dog: Buddy Smith
console.log(getName1(cat));     // Output: Cat: Whiskers

console.log(getPetName(dog6));   // Output: Dog: Buddy Smith
console.log(getPetName(cat));   // Output: Cat: Whiskers
