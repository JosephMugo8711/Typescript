var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Define a class 'User' implementing the 'UserInterface'
var User = /** @class */ (function () {
    // Constructor to initialize class properties
    function User(id, firstName, lastName, name, surname) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = name;
        this.surname = surname;
        this.unchangableName = firstName; // Initialize read-only property
    }
    // Method to implement the interface method 'getFullname'
    User.prototype.getFullname = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User.maxAge = 50; // Static property, shared across all instances of the class
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
// Create an instance of the 'User' class
var newUser = new User(1, "Monster", "lessons", "Monster", "Lessons");
//console.log(newUser.firstName);
console.log(User.maxAge);
