class Human {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
    getName() {
        if (this.name.length < 2)
            return "";
        return this.name;
    }
    setName(name) {
        if (name.length < 5)
            return;
        this.name = name;
    }
}
class Employee1 extends Human {
    callMe() {
        console.log(`Hello, my name is ${this.name}! I am an Employee`);
    }
}
const p1 = new Human("Jowamu");
p1.getName();
