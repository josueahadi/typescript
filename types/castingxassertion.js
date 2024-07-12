// Type casting
var numStr = "123";
var num = Number(numStr);
console.log(typeof num); //?
var boolStr = "true";
var bool = Boolean(boolStr);
console.log(bool);
// Type Assertion
// let someValue: any = "i am a string";
// let strLength: number = (<string>someValue).length;
// console.log(strLength); 
var someValue = 123;
var assert = someValue.toUpperCase();
console.log(assert);
var pet = { name: "Tom", purrs: true };
if (pet.purrs) {
    console.log("".concat(pet.name, " is a cat."));
}
else {
    console.log("".concat(pet.name, " is a dog."));
}
