// how Global and Local variable work in JavaScript 

console.log( a ); // This console.log function print undefined because of a is defined afer console fun 
// this is also called hoisting in javascript 

var a=10

pause()
play()

 function play (){
    var a=100
    console.log( "This is inside play function", a)
 }
 function pause (){
    var a =50
    console.log("This is inside pause function and it's example of loacal variable", a)
 }

 console.log( "This is an example of Global variable", a)


