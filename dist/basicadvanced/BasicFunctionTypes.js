function add(x, y) {
    if (x == 0) {
        return "Invalid";
    }
    return x + y;
}
const addResult = add(5, 10);
console.log(addResult);
function makeName(firstName, lastName, middleName = "Alicia") {
    if (middleName)
        return firstName + " " + middleName + " " + lastName;
    return firstName + " " + lastName;
}
const fullName = makeName("Rev", "Jowamu");
console.log(fullName);
function callFunc(func, parma1, param2) {
    func(parma1, param2);
}
callFunc(makeName, "Rev", "Jowamu");
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}
function applyFunc(funcs, values) {
    const results = [];
    for (let i = 0; i < funcs.length; i++) {
        const args = values[i];
        const result = funcs[i](args[0], args[1]);
        results.push();
    }
    return results;
}
applyFunc([mul, div], [[1, 2], [4, 5]]);
