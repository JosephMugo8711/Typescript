class Puppy {
    constructor(name) {
        Puppy.instanceCount++;
        this.name = name;
    }
    static decreaseCount() {
        this.instanceCount--;
    }
}
Puppy.instanceCount = 0;
const puppy1 = new Puppy("Max");
console.log(Puppy.instanceCount);
const puppy2 = new Puppy("Buddy");
console.log(Puppy.instanceCount);
Puppy.decreaseCount();
console.log(Puppy.instanceCount);
