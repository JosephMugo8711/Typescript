const names = [
    {name: "Jowamu"}, 
    {name: "Chris Fanchez"}, 
    {name: "Goodlife"}
];


const el = names.pop()?.name;

console.log(el)


const name1 = [[{name: "Alicia"}]];

// check if its undefined, continue throughtout the chain
const el1 =  name1.pop()?.pop()?.name

console.log(el1)

// assume this is not undefined
const el2 =  name1.pop()!.pop()!.name



console.log(el2)