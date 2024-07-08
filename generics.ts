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

// Record<K,V>

type Result = {
    firstName: string;
    surname: string;
    score: number;
};
//type ResultRecord = Record<string, Result>;
type ResultRecord = Record<"rodj" | "janes" | "fredp", Result>;

const records: ResultRecord = {
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
}