// Toonii module heldeg function 
// |-15| = 15 ,   |23| = 23

var module = function(number){
    var mod;
    if(number < 0) mod = -number;
    else mod=number;

    console.log(number + ' toonii module n ' + mod);
    return mod;
}


function mod(number){
    console.log('Statement function Ajillaa...' + number);
}

var addModules = function(x, y, z){
    var niilber = module(x) + module(y) + module(z);
    return niilber;
}

var sum = addModules(-1, -2, -3);
console.log(sum);