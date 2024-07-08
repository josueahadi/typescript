// basis usage

function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("hello")
console.log(output)
