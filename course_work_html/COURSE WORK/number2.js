// function Square()
// {
//    for (let i = 1, i <= 10; i++)
//    var a=prompt("enter a number:");
//    document.write("The square of "+a+" is:"+(a*a));
// }

// console.log("An example of exponential operator")
// console.log(3 ** 2);


function squareNumbers() {
   for (let i = 1; i <= 10; i++) {
     let squaredValue = square(i);
     console.log(`The Square of ${i} is: ${squaredValue}`);
   }
 }
 
 function square(num) {
   return num * num;
 }
 
 // Call the function to see the results
 squareNumbers();