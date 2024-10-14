class Dog1 {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    speak() {
        console.log(`${this.name} says Woof!`);
    }
    test() {
        return 1;
    }
}
class Cat1 {
    speak() {
        console.log("Meow!");
    }
}
const dog1 = new Dog1("Jimmy", "Black");
const cat2 = new Cat1();
const animals = [cat2, dog1];
function makesSound(animal) {
    animal.speak();
}
makesSound(cat2);
