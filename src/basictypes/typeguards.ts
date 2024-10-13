type StringOrNumber = string | number;

// typeof

function add1(value: StringOrNumber): StringOrNumber {
    if (typeof value === 'number') {
        return value + 1;
    } else if (typeof value ==='string') {
        return value.toUpperCase();
    } else {
        throw new Error('Unsupported value type');
    }
}

// instanceof

class Dog3 {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

class Cat3 {
    firstName: string;
    constructor(firstName: string, lastname: string ) {
        this.firstName = firstName
    }
}

function getName(animal: Cat | Dog){
    if (animal instanceof Cat3) {
        return `Cat: ${animal.firstName}`;
    } else if (animal instanceof Dog3) {
        return `Dog: ${animal.firstName} ${animal.lastName}`;
    } else {
        throw new Error('Unsupported animal type');
    }
}

function getName1(animal: Cat | Dog){
    if ("lastName" in animal){
        return `Cat: ${animal.firstName}`;
    } else {
        return `Dog: ${animal.firstName} ${animal.lastName}`;
    }
}


// use is keyword
function isCat(pet: Dog | Cat): pet is Dog {
    return (pet as Dog).lastName !== undefined
}