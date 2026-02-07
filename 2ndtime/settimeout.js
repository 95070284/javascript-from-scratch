//settimeout() method is used to call a function or evaluate an expression after a specified number of milliseconds. It returns a timeoutID, which is a positive integer value that identifies the timer created by the setTimeout() method. This ID can be used with the clearTimeout() method to cancel the timeout.

console.log(" This code is running before set timeout function ")

setTimeout(function () {
    console.log("This code is running after 2 seconds");
}, 2000);



console.log( "That line define after set time out function ")