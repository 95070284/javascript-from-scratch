function a(){
    var b=10

    c()
    function c (){
        var b=20;
        console.log(" This is inside c function which is also under function a ", b)
        console.log( this)
    }
    console.log( " This is function a ", b )
    console.log( this)
}

a();
console.log( b)