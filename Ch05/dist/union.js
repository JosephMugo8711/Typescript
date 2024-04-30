// // custom types
// // Define a custom type alias 'ID' for strings
// type ID = string; // type id
// // Define a custom type alias 'PopularTag' for strings
// type PopularTag = string;
// // Define a custom type alias 'MaybePopularTag' which can be either a 'PopularTag' or null
// type MaybePopularTag = PopularTag | null;
// // Define an interface 'UserInterface' representing the structure of a user
// interface UserInterface {
//     id: ID; // use it inside entities
//     name: string;
//     surname: string;
// }
// // Define an array 'popularTags' containing elements of type 'PopularTag'
// const popularTags: PopularTag[] = ["dragons", "coffee"];
// // Define a variable 'dragonsTag' which can be a 'PopularTag' or null
// const dragonsTag: MaybePopularTag = "dragon";
// // Define a variable 'username' of type string and assign it the value "alex"
// let username: string = "alex";
// // Define a variable 'pageName' which can be either a string or a number and assign it the value "1"
// // This illustrates the usage of union types
// let pageName: string | number = "1";
// // Define a variable 'errorMessage' which can be either a string or null
// let errorMessage: string | null = null;
// // Define a variable 'user' which can be either a 'UserInterface' object or null
// let user: UserInterface | null = null;
// // Define a variable 'someProp' which can be of multiple types: string, number, null, undefined, string array, or object
// let someProp: string | number | null | undefined | string[] | object;
// Example initialization of 'someProp' with a string value
//someProp = "Master Jowamu";
