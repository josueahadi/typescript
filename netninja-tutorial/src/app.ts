// classes 
class Invoice {
    client: string;
    details: string;
    amount: number; 

    constructor(c: string, d: string, a: number) {
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

let invoices: Invoice[] = [];
invoices.push(invoice1);
invoices.push(invoice2);
console.log(invoices);



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

