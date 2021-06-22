//sondgoi toog hevleh

// for(var i=1; i<=10; i = i + 2){
//     console.log(i);
// }

// ---- 100-s 2-r uruudaj hevleh
// for(var i=100; i>0; i=i-2){
//     console.log(i);
// }

// ----- 7-d huvaagddag toonuudiig hevleh
// for(var i=100; i>0; i--)
// {   
//     if(i % 7 === 0){
//         console.log(i);
//     }
// }

// ---- 1-s i hurtelh toonuudiin niilber
for(var i=10; i>=0; i--){
    console.log(i);

    var s=0;
    for(var j=1; j<=i; j++){
        s = s + j;
    }
    console.log('1-ees ' + i + ' hurtelh toonuudiin niiber: ' + s);
}