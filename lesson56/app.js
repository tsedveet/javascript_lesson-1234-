// console.log(Math.round(13.5));

var birthYears = [1981, 2005, 1950, 1978, 1986, 2010, 1948];
// var ages = findOutAges();
// console.log(ages);
// console.log(isFullAges());
// console.log(findOutMaxHeartRate());

// function findOutAges(){
//     var arr = [];
//     for(var i = 0; i<birthYears.length; i++){
//         arr.push(new Date().getFullYear() - birthYears[i]);
//     }
//     return arr;
// }

// function isFullAges(){
//     var arr = [];
//     for(var i = 0; i<ages.length; i++){
//         arr.push(ages[i] >= 18);
//     }
//     return arr;
// }

// function findOutMaxHeartRate(){
//     var arr = [];
//     for(var i = 0; i<ages.length; i++){
//         arr.push(Math.round(206.9 - 0.67 * ages[i]));
//     }
//     return arr;
// }
var ages = processArray(birthYears, findOutAges);
console.log(birthYears);
console.log(ages);
console.log(processArray(ages, isFullAge));
console.log(processArray(ages,findOutMaxHeartRate));
console.log(processArray([2016, 1945, 1833], findOutAges));
console.log(processArray([5, 76, 188], findOutMaxHeartRate));
console.log(processArray(ages, function(age){
    return age >= 65;
}));



function processArray(myArr, fn){
    var arr = [];

    for(var i = 0; i < myArr.length; i++){
        arr.push(fn(myArr[i]));
    }
    return arr;
}

function findOutAges(el){
    return new Date().getFullYear() - el;
}

function isFullAge(el){
    return el >= 18;
}

function findOutMaxHeartRate(el){
    return Math.round(206.9 - 0.67 * el); 
}