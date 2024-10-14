interface Person1 {
    name: string;
    age: number;
    height?: number;
    hello: () => void;
}

const person: Person1 = {
    name: "Joseph Wamiti Mugo",
    age: 30,
    hello: function() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}
person.hello();
console.log(person.age);


// more advanced
interface Person {
    name: string;
    age: number;
    height?: number;
}

interface Employee {
    employeeId: number;
}

interface Manager extends Employee, Person {
    // an array of people this manager manages
    employees: Person[]
}


const manager: Manager = {
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
}

// we have an object that implements the employee interface

// const worker: Employee = {
//     name: "Chris Martin",
//     age: 35,
//     employeeId: 123456,
// }

function getPerson(p: Person): Person {
    return {
        name: p.name,
        age: p.age,
        height: p.height || 0, // if height is not provided, set it to 0
    }
}