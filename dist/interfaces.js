const person = {
    name: "Joseph Wamiti Mugo",
    age: 30,
    hello: function () {
        console.log(`Hello, my name is ${this.name}!`);
    }
};
person.hello();
console.log(person.age);
