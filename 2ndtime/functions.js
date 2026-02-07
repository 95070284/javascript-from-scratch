// all types of function 
// function statement : when we decalre a function 
// function expression :store a function in variable 
// arrow function 
// anonymus function : without any name , this functions is used in the form of value that means use like a value that has no name 

// function normal_statement (){
//     console.log( " this is inside normal function ")
// }


// const normal_expression = function (){
//     console.log( " this is inside normal expression function ")     
// }

// normal_statement()
// normal_expression()     

const  example=function(argument){
    return    argument()
}

function function_argument (){
    console.log( " this is inside function argument ")  
}

example(function_argument)