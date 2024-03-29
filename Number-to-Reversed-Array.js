

// Create a function that takes a number and returns an array with 
// the digits of the number in reverse order.
// Examples

// reverseArr(1485979) ➞ [9, 7, 9, 5, 8, 4, 1]

// reverseArr(623478) ➞ [8, 7, 4, 3, 2, 6]

// reverseArr(12345) ➞ [5, 4, 3, 2, 1]



// Array.from(String(12345), Number);




function reverseArr(number) {
    return String(number).split('').map(Number).reverse();
}


console.log(reverseArr(1485979)); 
console.log(reverseArr(623478));  
console.log(reverseArr(12345));   
