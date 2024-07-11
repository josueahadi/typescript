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

// Generic Functions
function firstOrNull<T>(array: T[]): T | null {
    return array.length === 0? null : array[0];
}

console.log(firstOrNull<string>(["Rod", "Jane", "Fred"]));
console.log(firstOrNull<number>([1, 2, 3]));

// Generic Interfaces

interface Contact {
    name: string; 
    email: string;
}

interface Form<T> {
    errors: {
      [K in keyof T]?: string;
    };
    values: T;
  }

const ContactForm: Form<Contact> = {
    errors: {
        email: "This must be a valid email address"
    },
    values: {
        name: "Bob",
        email: "bob@someemail.com"
    }
}

// Generic Classes
class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}
}

const pair = new KeyValuePair<string, string>('1', 'a')

// Generic Constraints 

// interface Person {
//     name: string;
// }

class Person {
    constructor(public name: string){}
}

class Customer extends Person{

}

function echo<T extends Person>(value: T) {
    return value; 
}

// echo({name: 'a'})
echo(new Customer('a'))

// Extending Generic Classes (Generic Classes and Inheritance)

interface Product {
    name: string;
    price: number;
}

class Store<T> {
    protected _objects: T[] = [];
    add(obj: T): void {
        this._objects.push(obj);
    }
}

let store = new Store<Product>();

    // 1. passing on the generic type parameter
class CompressibleStore<T> extends Store<T> {
    compress() {}
}

let newStore = new CompressibleStore<Product>();
newStore.compress();

    // 2. restricting the generic type parameter 
class searchableStore<T extends {name: string}> extends Store<T> {
    find(name: string): T | undefined {
        return this._objects.find(obj => obj.name === name);
    }
}

    // 3. fix the generic type parameter
class ProductStore extends Store<Product> {
    filterByCategory(category: string): Product[] {
        return [];
    }
}