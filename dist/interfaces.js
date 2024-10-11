const person = {
    name: "Joseph Wamiti Mugo",
    age: 30,
    hello: function () {
        console.log(`Hello, my name is ${this.name}!`);
    }
};
person.hello();
console.log(person.age);
const manager = {
    name: "John Doe",
    age: 45,
    height: 1.85,
    employeeId: 123456,
    employees: [
        {
            name: "Jane Smith",
            age: 30,
            height: 1.70,
        },
        {
            name: "Alice Johnson",
            age: 28,
            height: 1.65,
        }
    ]
};
function getPerson(p) {
    return {
        name: p.name,
        age: p.age,
        height: p.height || 0,
    };
}
