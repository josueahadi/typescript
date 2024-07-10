function printId(id: number | string) {
    console.log('Your ID is ' + id);
}
// OK
printId(101);
// Error
printId({myId: 22343});
//|Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.

function printId(id: number | string) {
    //console.log(id.toUpperCase());
    //Property 'toUpperCase' does not exist on type 'string | number'.
      //Property 'toUpperCase' does not exist on type 'number'.
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}