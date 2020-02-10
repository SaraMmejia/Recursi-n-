// // / Print Numbers Backwards

// // // Write a function called printNumsBackwards that receives a number and prints all the numbers from the number to 1. 
// Print each number in a new line.

// // printNumsBackwards(10); // prints 10 to 1
// // printNumsBackwards(500); // prints 500 to 1




function printNumsBackwards( num ){ 
    while ( num >= 1 ){
        console.log(num);
        num --; 
    }
}
printNumsBackwards(10)



function printNumsBackwards(num) {
    
    console.log(num);
    if ( num > 1 ){ 
        return printNumsBackwards(num-1)

    }
}
printNumsBackwards(10)




