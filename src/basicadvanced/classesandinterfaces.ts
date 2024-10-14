interface Animal1 {
    speak(): void
}

class Dog1 implements Animal1{
    private name: string
    private color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    speak(): void {
        console.log(`${this.name} says Woof!`);
    }

    test() {
        return 1
    }
}


class Cat1 implements Animal1 {
    speak() {
        console.log("Meow!");
    }
}

const dog1: Animal1 = new Dog1("Jimmy", "Black")
const cat2 = new Cat1()
const animals: Animal1[] = [cat2, dog1];

function makesSound(animal: Animal1){
    animal.speak();
}

makesSound(cat2)