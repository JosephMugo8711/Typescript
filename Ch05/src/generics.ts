// Define the search string
const searchStr = "foo";

// Returns true if at least one element of the list contains the specified search string, false otherwise
const hasSearchedString = any<string>((el: string) => el.includes(searchStr), [
    "fooo",
    "bar",
    "baz"
]);

// All generic data types are written inside "<>"
// This function adds a random id to an object and returns it
const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16); // Generate a random id
    return {
        ...obj,
        id   // Add the generated id to the object
    };
};

// Define an interface 'User2Interface' with a generic type 'T'
interface User2Interface<T> {
    name: string;
    data: T;
}

// Create an object 'user2' of type 'User2Interface' with a generic type '{meta: string}'
const user2: User2Interface<{ meta: string }> = {
    name: "Jack",
    data: {
        meta: "foo",
    }
};

// Create an object 'user3' of type 'User2Interface' with a generic type 'string[]'
const user3: User2Interface<string[]> = {
    name: "John",
    data: ["foo", "bar", "baz"]
};

// Call the 'addId' function with type inference, passing 'user2' as argument
// TypeScript should infer the generic type based on the type of 'user2'
const result = addId(user2); // Error occurs here due to missing type argument

// Log the result
console.log("result", result);




// Returns true if at least one of the elements of the list matches the predicate, false otherwise
// The function takes a predicate function 'fn' and a readonly array 'list' of type 'T'
// It applies the predicate function to each element of the list and returns true if any element satisfies the predicate, otherwise false
export function any<T>(fn: (a: T) => boolean, list: readonly T[]): boolean {
    // Iterate through each element of the list
    for (const item of list) {
        // Apply the predicate function 'fn' to the current element 'item'
        if (fn(item)) {
            // If the predicate function returns true for any element, return true
            return true;
        }
    }
    // If none of the elements satisfy the predicate, return false
    return false;
}
