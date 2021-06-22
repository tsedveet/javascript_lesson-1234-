//------------------------- bodlogo 1--------------------------
// ------ 1-1000 hurtelh toonuudiin biilberiig ol?
// var sum = 0;
// var limit = 4;

// for(var i = 1; i<=limit; i++){
//     sum = sum+i;
// }
// console.log('1-' +limit+ ' hurtelh toonii niilber: ' +sum);



// ----------------------- bodlogo 2 ---------------------------
//------ 1-1000 hurtelh buh 7-d huvaagddag toonii niilberiig ol?
// var sum = 0;
// var limit = 1000;

// for(var i=1; i<=limit; i++){
//     if(i%7 === 0){
//         sum = sum + i;
//         console.log('i=' +i+ ' baihad sum= ' +sum);
//     }
// }
// console.log('1-' +limit+ ' hurtelh buh 7-d huvaagddag tonuudiin niilber bol: ' +sum); 

// ----------------------- bodlogo 3 ---------------------------
//------ 1-1000 hurtelh buh anhnii toog ol?
// for(var i=2; i<=1000; i++){
//     if(anhniiTooMun(i) === true) console.log(i+ ' too bol anhnii too mun.');
// }
// function anhniiTooMun(too){
//     var anhniiTooMun = true;
//     for(var x=2; x<too; x++){
//         if(too%x === 0){
//             anhniiTooMun = false;
//             break;
//         }
//     }
//     return anhniiTooMun;
// }

// ----------------------- bodlogo 4 ---------------------------
// ---- 19 elementtei massive-t sanamsargui too duurgeed hamgiin ih hamgiin baga 2 elementiin bairiig soli.
var arr = [];
for(var i=1; i<=10; i++){
    var too = Math.random() * 100;
    var floorToo = Math.floor(too);
    arr.push(floorToo);
}
console.log(arr);

var minToo = 100;
var minTooIndex = -1;

for(var i=0; i<arr.length; i++){
    if(arr[i] < minToo){
        minToo = arr[i];
        minTooIndex = i;
    }
}
console.log('Hamgiin baga element n: ' +minToo+ ' Ternii index n: ' +minTooIndex);

var maxToo = 0;
var maxTooIndex = -1;

for(var i=0; i<arr.length; i++){
    if(arr[i]>maxToo){
        maxToo = arr[i];
        maxTooIndex = i;
    }
}
console.log('Hamgiin ih element n: ' +maxToo+ ' Ternii index n: ' +maxTooIndex);

var turUtga = arr[minTooIndex];
arr[minTooIndex] = arr[maxTooIndex];
arr[maxTooIndex] = turUtga;

for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}