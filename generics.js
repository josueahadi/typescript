// basis usage
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
// creating generic functions 
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
