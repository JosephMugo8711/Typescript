function sum(str, ...numbers) {
}
sum("hello", 1, 2, 3);
sum("");
sum("", 1, 2, 3, 4, 55, 44, 66);
function getItemLength(nameOrNames) {
    if (typeof nameOrNames === "string") {
        return nameOrNames.length;
    }
    else if (Array.isArray(nameOrNames)) {
        return "Hello Jowamu";
    }
    return 0;
}
getItemLength(["", ""]);
getItemLength("hello");
