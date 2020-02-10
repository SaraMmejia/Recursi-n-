// Print Numbers

// // // Write a function called printNumbers that receives a number and prints all the numbers from 1 to N. 
// Print each number in a new line.

// // printUpTo(10); // prints 1 to 10
// // printUpTo(500); // prints 1 to 500


 function printNumbers ( num ){ 
    let i = 1
    while ( i <= num ){
        console.log(i)
        i ++ 
    }
}
 


function printNumbers ( num ) { 
    if ( num >= 1 ){
        printNumbers (num -1)
        console.log(num);
    }
}
printNumbers(10)
