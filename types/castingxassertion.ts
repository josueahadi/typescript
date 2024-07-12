// Type casting

let numStr: string = "123";
let num: number = Number(numStr); 
console.log(typeof num); //?

let boolStr: string = "true";
let bool: boolean = Boolean(boolStr); 
console.log(bool); 

// Type Assertion

// let someValue: any = "i am a string";
// let strLength: number = (<string>someValue).length;
// console.log(strLength); 

let someValue: number = 123;
let assert: string = (someValue as unknown as string).toUpperCase();
console.log(assert); 


interface Cat {
    name: string;
    purrs: boolean;
}
  
interface Dog {
    name: string;
    barks: boolean;
}
  
let pet: Cat | Dog = { name: "Tom", purrs: true };

if ((pet as Cat).purrs) {
    console.log(`${pet.name} is a cat.`);
} else {
    console.log(`${pet.name} is a dog.`);
}