class Puppy {
    // exists on the actual class not each instance
    // Static attributes
    static instanceCount: number = 0;
    // an attribute name
    // instance attribute
    name: string;

    constructor(name: string) {
        Puppy.instanceCount++;
        // this is an instance of the class we are acting on
        this.name = name;
    }

    // static method
    // Static methods can only access variables that are associated with the class
    // in this case static attributes or static variables
    static decreaseCount() {
        // this is a reference of the Puppy not referencing an individual instance
        this.instanceCount--
    }
}

// instances
const puppy1 = new Puppy("Max");


console.log(Puppy.instanceCount); // 2
const puppy2 = new Puppy("Buddy");


console.log(Puppy.instanceCount); // 3
Puppy.decreaseCount()

console.log(Puppy.instanceCount); 

