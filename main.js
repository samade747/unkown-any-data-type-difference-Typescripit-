// // let num1: unknown = "18";
// // let result: number = num1 as number;
// // // let result: number = <number>num1;
// // console.log(result);
// // type checking with type assertion\
// // if type checking 
// let num1: unknown = '18'; 
// let result: number = num1 as number; // type assertion
// console.log(result); 
// // let result: number = <number>num1; // type assertion
// learning rest parameters
// function invite(host:string = "samad",...guest: string[] ) {
//     console.log(guest);
// }
// invite("samad", "ali", "khan");
function invite(host) {
    var guest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        guest[_i - 1] = arguments[_i];
    }
    console.log("$host");
}
invite("samad", "ali", "khan");
