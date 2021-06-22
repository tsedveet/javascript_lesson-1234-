// IIFE --> Immediately Invoked Function Expression

// Function statement
function hi(){
    console.log('hi');
}
hi();

// Function Expression
var aaa = function (){
    console.log('Hello');
}
aaa();

// IIFE --> Immediately Invoked Function Expression
(function (){
    console.log('hello world');
})();