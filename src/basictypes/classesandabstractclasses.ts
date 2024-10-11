class Human {
    // when you add private it means this property can only be accessed within this class
    // change it from inside of the class
   // private name: string;  // name property

   // we can access the attribute even outside of the class
  //  public name: string;
    protected  name: string;

    // constructor which will be called when we create a new instance of this class
    constructor(name: string) {
        // initialize the name property
        this.name = name;
        this.greet(); 
    }
    // method  or a function to greet the person
    private greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }

    // allow someone to access name property through this method
    getName() {
        if (this.name.length < 2) return ""
        return this.name;
    }

    setName(name: string) {
        if (name.length < 5) return
        this.name = name;
    }
}


class Employee1 extends Human {

    callMe() {
        console.log(`Hello, my name is ${this.name}! I am an Employee`);
    }

}

// in the above class we have a few things we can do to add some typescript types to 
// example
// properties in class add some key words  before them that define they are public,  private, protected

const p1 = new Human("Jowamu");
p1.getName()
// add an access modifier to our property



// Abstract class
 

// the class animal is an abstract means you cannot instantiate it directly ( new Animal() could raise an error)
// Defines two abstract methods (sound and makeSound) that subclasses must implement
// Has a cocrete method move() that provides functionality (moving and making a sound) which can be inherited by subclasses
abstract class Animal {
    // this property is required by all classes that extend this abstract class
    // Abstract method - must be implemented in subclasses
    abstract sound(): void;
    
    // Another abstract method - can be used by subclasses
    abstract makeSound(duration:  number): void;

    // concrete method - can be used by subclasses
    move(duration: number) {
        console.log("Animal is moving");
        this.makeSound(duration);  // calls the subclass's implementataion
    }

}

// subclasses
// Dog class extends Animal and provides its own implementation of the makeSound() method.


class Dog extends Animal {

    sound(): void {
        throw new Error("Method not implemented.");
    }
    makeSound(duration: number) {
        // call console.log("Woof woof")  when move() is called
        console.log("Woof woof");
    }
}


// cat class extends Animal and implememnts the makeSound() method
class Cat extends Animal {
    sound(): void {
        throw new Error("Method not implemented.");
    }
    makeSound(duration: number) {
        console.log("Meow meow");
    }
}

// Using the classes
const dog = new Dog()
dog.move(5); // Logs "Animal is moving" and "Woof woof"

// when dog.move(5) is called:
// The concrete move() method from the Animal class is invoked, printing "Animal is moving".

// Then, dog.makeSound() is called, which triggers the Dog class's implementation of makeSound(), printing "Woof woof".