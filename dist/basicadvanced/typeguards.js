function add1(value) {
    if (typeof value === 'number') {
        return value + 1;
    }
    else {
        return value.toUpperCase();
    }
}
class Dog3 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class Cat3 {
    constructor(firstName) {
        this.firstName = firstName;
    }
}
function getName(animal) {
    if (animal instanceof Cat3) {
        return `Cat: ${animal.firstName}`;
    }
    else if (animal instanceof Dog3) {
        return `Dog: ${animal.firstName} ${animal.lastName}`;
    }
    else {
        throw new Error('Unsupported animal type');
    }
}
function getName1(animal) {
    if ('lastName' in animal) {
        return `Dog: ${animal.firstName} ${animal.lastName}`;
    }
    else {
        return `Cat: ${animal.firstName}`;
    }
}
function isDog(pet) {
    return 'lastName' in pet;
}
function getPetName(pet) {
    if (isDog(pet)) {
        return `Dog: ${pet.firstName} ${pet.lastName}`;
    }
    else {
        return `Cat: ${pet.firstName}`;
    }
}
const dog6 = new Dog3("Buddy", "Smith");
const cat = new Cat3("Whiskers");
console.log(add1(5));
console.log(add1("hello"));
console.log(getName(dog6));
console.log(getName(cat));
console.log(getName1(dog6));
console.log(getName1(cat));
console.log(getPetName(dog6));
console.log(getPetName(cat));
