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


// // if we print the rest parameters only host will be printed
// function invite(host:string, ...guest: string[] ) {
//     console.log(`$host`);
// }


// invite("samad", "ali", "khan");

// if we print the rest parameters only guest will be printed
// function invite(host:string, ...guest: string[] ) {
//     console.log(`$guest`);
// }


// invite("samad", "ali", "khan");


// if we want to join 
// function invite(...guest: string[] ) {
//     console.log(guest.join("|"));
// }


// invite("samad", "ali", "khan");

// function overloads
// if we create function overloads it must be same name of function 
    function add(arg1 : string, arg2: string): number; // its type is string 
    function add(arg1 : number, arg2: number): number; // its type is number
    function add(arg1 : boolean, arg2: boolean): boolean; // its type is boolean
    function add(arg1 : any, arg2: any): any; // its type is any

    function add(arg1 : any, arg2: any): any { // function add with any type
        return arg1 + arg2; // return type is any
    }

    console.log(add("1", "2")); // return type is number
    console.log(add(1, 2)); // return type is number
    console.log(add(true, false)); // return type is boolean
    console.log(add("22", 54)); // return type is boolean


