// basis usage
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
function identity(arg) {
    return arg;
}
var output = identity("hello");
console.log(output);
// Array<T>
var scores;
scores = [78, 90, 56];
console.log(scores);
var coordinates;
coordinates = [
    [20, 89],
    [67, 1900],
    [34, 12]
];
// Promise<T>
var promisedResponse = fetch("https://swapi.dev/api/");
promisedResponse.then(function (res) { return console.log(res.ok); });
var records = {
    rodj: {
        firstName: "Rod",
        surname: "James",
        score: 70,
    },
    janes: {
        firstName: "Jane",
        surname: "Smith",
        score: 95,
    },
    fredp: {
        firstName: "Fred",
        surname: "Peters",
        score: 60,
    }
};
// Generic Functions
function firstOrNull(array) {
    return array.length === 0 ? null : array[0];
}
console.log(firstOrNull(["Rod", "Jane", "Fred"]));
console.log(firstOrNull([1, 2, 3]));
var ContactForm = {
    errors: {
        email: "This must be a valid email address"
    },
    values: {
        name: "Bob",
        email: "bob@someemail.com"
    }
};
// Generic Classes
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    return KeyValuePair;
}());
var pair = new KeyValuePair('1', 'a');
// Generic Constraints 
// interface Person {
//     name: string;
// }
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Customer;
}(Person));
function echo(value) {
    return value;
}
// echo({name: 'a'})
echo(new Customer('a'));
