var too = [12, 13, 17, 90, 21, 65, 32];

for(var i = 0; i<too.length; i++){
    if(too[i] % 7 !== 0) continue;

    console.log(too[i] + ' ene too 7-d huvaagdana.');
    var huvaasanToo = too[i]/7;
    console.log(too[i] + ' toog 7-d  huvaahad ' +huvaasanToo+ ' garna.');
    console.log('Kvadrat n: ' +huvaasanToo**2);
    break;
}
console.log('Finish the program');

