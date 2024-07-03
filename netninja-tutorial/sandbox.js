var inputs = document.querySelectorAll('input');
console.log(inputs);
var priceAfterDiscount = function (priceBeforeDiscount, discount) {
    return priceBeforeDiscount - (priceBeforeDiscount * discount);
};
console.log(priceAfterDiscount(1000, 0.2));
