// basis usage

function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("hello")
console.log(output)

// Array<T>

let scores: Array<number>;
scores = [78, 90, 56];
console.log(scores)

type Coordinate = [number, number];
let coordinates: Array<Coordinate>;
coordinates = [
    [20, 89],
    [67, 1900],
    [34, 12]
];

// Promise<T>

const promisedResponse: Promise<Response> = fetch("https://swapi.dev/api/");
promisedResponse.then(res => console.log(res.ok))