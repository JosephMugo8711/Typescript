interface Person1 {
    name: string;
    age: number;
    height?: number;
    hello: () => void;
}
declare const person: Person1;
interface Person {
    name: string;
    age: number;
    height?: number;
}
interface Employee {
    employeeId: number;
}
interface Manager extends Employee, Person {
    employees: Person[];
}
declare const manager: Manager;
declare function getPerson(p: Person): Person;
