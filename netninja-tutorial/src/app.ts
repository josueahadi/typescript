import {Invoice} from './classes/Invoice.js'

const invoice1 = new Invoice('McKenon', 'consultancy', 10000);
const invoice2 = new Invoice('Pearson', 'books', 200);
//console.log(invoice1, invoice2); 

let invoices: Invoice[] = [];
invoices.push(invoice1);
invoices.push(invoice2);
//console.log(invoices);

invoices.forEach(invoice => {
    console.log(invoice.client, invoice.amount, invoice.format())
})


//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement; 
const amount = document.querySelector('#amount') as HTMLInputElement; 

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})

