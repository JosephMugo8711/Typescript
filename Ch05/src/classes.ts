// Define an interface 'UserInterface' specifying a method signature for 'getFullname'
interface UserInterface {
    // Define the method signature for 'getFullname'
    getFullname(): string;
    // Define properties expected by the interface
    id: number;
    name: string;
    surname: string;
}

// Define a class 'User' implementing the 'UserInterface'
class User implements UserInterface {
    // Declare properties with different access modifiers
    protected firstName: string;          // Accessible within the class and its subclasses
    private lastName: string;             // Accessible only within the class
    readonly unchangableName: string;     // Read-only property, can't be modified after initialization
    static readonly maxAge = 50;          // Static property, shared across all instances of the class

    // Implement properties from the interface
    // No need to redeclare 'id' here since it's already declared in the interface
    name: string;
    surname: string;
    id: number;

    // Constructor to initialize class properties
    constructor(id: number, firstName: string, lastName: string, name: string, surname: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = name;
        this.surname = surname;
        this.unchangableName = firstName;  // Initialize read-only property
    }

    // Method to implement the interface method 'getFullname'
    getFullname(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

class Admin extends User {
    private editor: string

    setEditor(editor: string): void {
        this.editor = editor
    }

    getEditor(): string {
        return this.editor
    }
}

// Create an instance of the 'User' class
const newUser = new User(1, "Monster", "lessons", "Monster", "Lessons");
// console.log(newUser.firstName); // Error: Property 'firstName' is protected and only accessible within class 'User' and its subclasses
console.log(User.maxAge);
