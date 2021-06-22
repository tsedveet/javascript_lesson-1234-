var dun = prompt('Ta dungee oruulna uu!');

var hahuulMungu = 5000;
var hamaatan = false;
var nadadTaalagddag = false;

if(dun>95 || hahuulMungu > 5000 || (hamaatan === true && nadadTaalagddag === true)){
    console.log('Ta A avlaa');
}
else{
    console.log('Ta muu avlaa');
    console.log('Tanii dun : ' +dun);
}


// leson 11 iin jishee

var name = "Bold";
var age = 20;

// if(age >= 18 ) console.log(name + ' nasand hursen hun');
// else console.log(name + ' nasand hursen hun');

// age >= 18 ? console.log(name + ' nasand hursen hun') : console.log(name + ' nasand hursen hun');

var who = age >= 18 ? 'Adult' : 'Child';

who === 'Adult' ? console.log('He is an adult') : console.log('He is a child');