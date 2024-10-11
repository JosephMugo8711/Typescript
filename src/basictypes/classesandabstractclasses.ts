class Human {
    name: string;  // name property
    // constructor which will be called when we create a new instance of this class
    constructor(name: string) {
        this.name = name;
    }
    // method  or a function to greet the person
    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

// in the above class we have a few things we can do to add some typescript types to 
// example
// properties in class add some key words  before them that define they are public,  private, protected

const pi = new Human("Jowamu");