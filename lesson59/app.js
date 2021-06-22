// setTimeout(hello, 3000);
// function hello(){
//     console.log('Saina uu?');
// }

// setTimeout(function(){
//     console.log('Hello?')
// }, 4000);

function showPost(content){
    var editedContent = 'Shine medee: ' + content + '\n\nTa nemelt medeelel avahiig husvel sited handana uu.';
    console.log(editedContent);
    return function(){
        var email = prompt(editedContent + '\n\nHerev ta email haygaa oruulbal bid tanid shine medeelliig turgen shuurhai hurgej baih bolno.');
        document.write('Thank you! Bid tanii email haygiig huleej avlaa. Tanii email: ' + email);
    }
}

var medee = 'Site-n hymdral duusahad erduu neg honog uldlee';
var askEmailFunction = showPost(medee);
setTimeout(askEmailFunction, 5000);