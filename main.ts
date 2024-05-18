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
function invite(...guest: string[] ) {
    console.log(guest.join("|"));
}


invite("samad", "ali", "khan");
