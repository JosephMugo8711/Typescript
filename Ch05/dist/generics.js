"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.any = void 0;
// Define the search string
var searchStr = "foo";
// Returns true if at least one element of the list contains the specified search string, false otherwise
var hasSearchedString = any(function (el) { return el.includes(searchStr); }, [
    "fooo",
    "bar",
    "baz"
]);
// All generic data types are written inside "<>"
// This function adds a random id to an object and returns it
var addId = function (obj) {
    var id = Math.random().toString(16); // Generate a random id
    return __assign(__assign({}, obj), { id: id // Add the generated id to the object
     });
};
// Create an object 'user2' of type 'User2Interface' with a generic type '{meta: string}'
var user2 = {
    name: "Jack",
    data: {
        meta: "foo",
    }
};
// Create an object 'user3' of type 'User2Interface' with a generic type 'string[]'
var user3 = {
    name: "John",
    data: ["foo", "bar", "baz"]
};
// Call the 'addId' function with type inference, passing 'user2' as argument
// TypeScript should infer the generic type based on the type of 'user2'
var result = addId(user2); // Error occurs here due to missing type argument
// Log the result
console.log("result", result);
// Returns true if at least one of the elements of the list matches the predicate, false otherwise
// The function takes a predicate function 'fn' and a readonly array 'list' of type 'T'
// It applies the predicate function to each element of the list and returns true if any element satisfies the predicate, otherwise false
function any(fn, list) {
    // Iterate through each element of the list
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var item = list_1[_i];
        // Apply the predicate function 'fn' to the current element 'item'
        if (fn(item)) {
            // If the predicate function returns true for any element, return true
            return true;
        }
    }
    // If none of the elements satisfy the predicate, return false
    return false;
}
exports.any = any;
