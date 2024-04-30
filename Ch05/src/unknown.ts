// Declare a variable 'vAny' of type 'any' and assign it the value 10
let vAny: any = 10;

// Declare a variable 'vUnknown' of type 'unknown' and assign it the value 10
let vUnknown: unknown = 10;

// Attempt to assign the value of 'vAny' to a variable 's1' of type string
// 'vAny' can hold any type of value, so no type checking is performed during assignment
let s1: string = vAny;

// Attempt to assign the value of 'vUnknown' to a variable 's2' of type string
// TypeScript throws an error because 'vUnknown' is of type 'unknown',
// which is not directly assignable to type 'string'
// We need to perform type checking or type assertion before assignment
// Correct way to handle this would be:
// let s2: string = vUnknown as string; or let s2: string = <string>vUnknown;
let s2: string = vUnknown as string; // convert unknown type to string type
// type assertion
let pageNumber: string = "1";
let numericPageNumber: number = (pageNumber as unknown) as number;

// Attempt to call a method 'foo' on 'vAny'
// Since 'vAny' is of type 'any', TypeScript allows calling any method on it without type checking
// This can potentially lead to runtime errors if the method does not exist
console.log(vAny.foo());

// Attempt to call a method 'foo' on 'vUnknown'
// TypeScript throws an error because 'vUnknown' is of type 'unknown',
// and calling methods on values of type 'unknown' directly is not allowed without type checking or type assertion
// Correct way to handle this would be to perform type checking before calling the method
// Example:
// if (typeof vUnknown === 'object' && vUnknown !== null && 'foo' in vUnknown) { console.log(vUnknown.foo()); }
//console.log(vUnknown.foo());
