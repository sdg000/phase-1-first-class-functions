function receivesAFunction(thing){
    return thing();

}

function returnsANamedFunction(cb){
    function inner(){
        console.log("i am inner")
    }
    return inner
}

function returnsAnAnonymousFunction (){
    return function(){
        console.log("anonymo")
        
    }
}