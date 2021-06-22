var materi = {name: 'bodis'};
materi.haragdah = function(){
    console.log(this.name + ' materi haragdlaa');
}
var amitan = Object.create(materi);
amitan.name = 'amitan';
amitan.hoolloh = function(){
    console.log(this.name + ' amitan hoolloh');
}
amitan.hudluh = function(){
    console.log(this.name + ' amitan hudluh');
}
var hun = Object.create(amitan);
hun.name = 'hun';
hun.tushaalAvah = function(tushaal){
    console.log(this.name + ' hun ' + tushaal +' tushaal avlaa'); 
}
var tsereg = Object.create(hun);
tsereg.name = 'Tsedvee';
tsereg.baildah = function(){
    console.log('baildlaa.');
}

var tagnuul = Object.create(hun);
tagnuul.name = 'Riki';

// console.log(tsereg.__proto__.__proto__);

tsereg.haragdah();
tsereg.hoolloh();
tsereg.hudluh();
tsereg.tushaalAvah('Dairaad');
tsereg.baildah();

tagnuul.tushaalAvah('yvdag ward');
