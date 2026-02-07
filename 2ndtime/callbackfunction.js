// example of callback function
// example 1

// a function that takes another function as an argument is called a callback function. The callback function is executed after the completion of the main function.

function sayhello(callback){
    console.log("hello !");
    callback();
}

function sayby (){
    console.log(" bye !");

}

sayhello(sayby)

// example 2

completestudy=function(callback ){
    console.log("Today's work is completed ")
    callback ()

}
function takebreak (){
    console.log("Now it's time to take a small break ")
    
}
completestudy(takebreak)   

// example 3

sum = function (a, b, add ){ 
    return add (a, b)
}

operation =function ( a, b){ 
    return a+b
}

console.log(sum(3,9, operation))

