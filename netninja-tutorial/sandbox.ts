const inputs = document.querySelectorAll('input');
console.log(inputs);

const priceAfterDiscount = (priceBeforeDiscount: number, discount: number) => {
    return priceBeforeDiscount - (priceBeforeDiscount*discount);
}

console.log(priceAfterDiscount(1000, 0.2));