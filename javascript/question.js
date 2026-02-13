// Practice JavaScript questions

let guessNum=45; 

let userInput = prompt( "enter Your Number :")
let count=0;
while(userInput != guessNum){
    userInput = prompt( "You are enter wrong number guess again :")
    count++;
    if(userInput>guessNum){
        console.log(" It is not Number u are finding  please enter smaller number ")
        console.log( "Your Attempt", count)
    }
    else{
        console.log(" It is not Number u are finding Please enter Greater Number You have enter  ")
        console.log( "Your Attempt", count)
    }

    
}
console.log( "Your attempt:",count)
