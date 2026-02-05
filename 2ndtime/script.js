// how execution context works in js

console.log(a)

// It defines how js work 
// There are two phases of js execution first is all the lines store in mermory and then it's goes into code execution phase 
var a=10

function sum(){
    var add =num+num
    console.log("This statement is under the sum function ")
    console.log( add)

}

var add=sum(5)