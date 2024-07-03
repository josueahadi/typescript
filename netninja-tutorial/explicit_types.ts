
// explicit types 
let character: string;
let age: number;
let isLoggedIn: boolean;

//age = 'luigi';
age = 20;

// arrays 
let arr: string[] = [];
arr.push('shaun');

// union types 
let mixed: (string|number)[] = [];
mixed.push('hello');
mixed.push(5);
//mixed.push(false)
console.log(mixed);

// objects

let obj1: object; 
obj1 = { name: 'yoshi', age: 30 }

let obj2: {
    name: string,
    age: number,
    beltColour: string
}

obj2 = {name: 'Mario', age: 20, beltColour: 'red'}