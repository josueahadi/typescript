import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter; 
// docOne = new Invoice('Specter', 'litigation', 5000);
// docTwo = new Payment('Litt', 'partner compensation', 10000)
// let docs: HasFormatter[] = [];
// docs.push(docOne); 
// docs.push(docTwo);
// console.log(docs);
// const invoice1 = new Invoice('McKenon', 'consultancy', 10000);
// const invoice2 = new Invoice('Pearson', 'books', 200);
// //console.log(invoice1, invoice2); 
// let invoices: Invoice[] = [];
// invoices.push(invoice1);
// invoices.push(invoice2);
// //console.log(invoices);
// invoices.forEach(invoice => {
//     console.log(invoice.client, invoice.amount, invoice.format())
// })
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
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
