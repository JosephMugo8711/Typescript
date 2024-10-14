var _a, _b, _c;
const names = [
    { name: "Jowamu" },
    { name: "Chris Fanchez" },
    { name: "Goodlife" }
];
const el = (_a = names.pop()) === null || _a === void 0 ? void 0 : _a.name;
console.log(el);
const name1 = [[{ name: "Alicia" }]];
const el1 = (_c = (_b = name1.pop()) === null || _b === void 0 ? void 0 : _b.pop()) === null || _c === void 0 ? void 0 : _c.name;
console.log(el1);
const el2 = name1.pop().pop().name;
console.log(el2);
