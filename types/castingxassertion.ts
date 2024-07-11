// Type casting

let numStr: string = "123";
let num: number = Number(numStr); 
console.log(num); 

let boolStr: string = "true";
let bool: boolean = Boolean(boolStr); 
console.log(bool); 

// Type Assertion

// let someValue: any = "i am a string";
// let strLength: number = (<string>someValue).length;
// console.log(strLength); 

let someValue: any = "i am a string";
let strLength: number = (someValue as string).length;
console.log(strLength); 


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