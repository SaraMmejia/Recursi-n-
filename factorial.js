// Factorial

// // Write a function called factorial that receives a number and returns the factorial of the number. 
// The factorial is the multiplication of every positive number up to the number. For example, 
// the factorial of 5 is 120 because 5 * 4 * 3 * 2 * 1 = 120.

// 5! = 5 * 4 * 3 * 2 * 1

// console.log(factorial(4)); // 24
// console.log(factorial(5)); // 120
// console.log(factorial(6)); // 720
// console.log(factorial(9)); // 362880


// function factorial (num) { 
//     let fac = 1;
//     for ( let i = 1 ; i <= num ; i++) {
//         fac = fac * i; 
//     }
//     return fac; 
// }



 

function factorial ( num ) {
    if ( num === 0 ) {
        return 1;
    } else if (  num <=1 ) {
    return num;
    } 
    return num * factorial(num-1); 
}

console.log(factorial(0));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(9));


