"use strict";
// classes 
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const invoice1 = new Invoice('McKenon', 'consultancy', 10000);
const invoice2 = new Invoice('Pearson', 'books', 200);
console.log(invoice1, invoice2);
let invoices = [];
invoices.push(invoice1);
invoices.push(invoice2);
console.log(invoices);
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
//console.log(form.children)
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
