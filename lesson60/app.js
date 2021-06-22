// var a = [];
// a.push(34);
// a.push('hello');
// a.push(function(){
//     console.log('Sainuu, massive dotroos mendchilj baina...');
//     return function(){
//         console.log('Massive dotorh function dotorh function-s hevlev.');
//         return function(){
//             console.log('... Inception!!! ...');
//         }
//     }
// });
// a[2]()()();

// function prepare(){
//     var arr = [];
//     for(var i = 0; i < 3; i++){
//         arr.push(function(){
//             console.log(i);
//         })
//     }
//     return arr;
// }

// var massive = prepare();
// massive[0]();
// massive[1]();
// massive[2]();

function prepare(){
    var arr = [];
    for(var i = 0; i < 3; i++){
        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                }
            })(i)
        )
    }
    return arr;
}

var massive = prepare();
massive[0]();
massive[1]();
massive[2]();
