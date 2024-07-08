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
