// we learn about arrow function 

//Normal function 
console.log(sum())


function sum ( a, b){ 
    console.log( a+b)
}

sum (5,5)

// one drawback in arrow function that is we have to call arrow function after defining below the arrow function 

const add=(m,n)=>{
    
    let sum= m+n
    console.log(sum)
}

add(8,9)

// we can not call arrow function before defining it
let a="we are global variable which is defined by let "
console.log(hello(),a)


function hello(){
    console.log("we are in hello fuction ")
}