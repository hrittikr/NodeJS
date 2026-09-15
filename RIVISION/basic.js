// console.log("Hello World")


// //synchronous code
// console.log("========== Synchronous start =======");
// for (let i=0; i<5; i++){
//     console.log(`${i}`);
// }
// console.log("========== Synchronous end =======");


// // asynchronous code
// console.log("========== Asynchronous start =======");
// setTimeout(()=>{
//     console.log("========== Hrittik =======");
// }, 2000);
// console.log("========== Asynchronous end =======");


// //exexution order
// console.log("Synchronous code");
// Promise.resolve().then(()=>{
//     console.log("Microtask queue");
// })

// setTimeout(()=>{
//     console.log("Macrotask queue");
// }, 2000);

// Promise.resolve().then(()=>{
//     console.log("Microtask queue 2");
// })


const calculate_area=require("./main.js")
console.log(calculate_area(2))
const calculate_perimeter=require("./main.js")
console.log(calculate_perimeter(3))