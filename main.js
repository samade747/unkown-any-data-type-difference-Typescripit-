// // let num1: unknown = "18";
function add(arg1, arg2) {
    return arg1 + arg2; // return type is any
}
console.log(add("1", "2")); // return type is number
console.log(add(1, 2)); // return type is number
console.log(add(true, false)); // return type is boolean
console.log(add("22", 54)); // return type is any
console.log(add("22", 154)); // return type is any
