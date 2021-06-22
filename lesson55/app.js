function Materi(une, ungu){
    this.ungu = ungu;
    this.une = une;
}
Materi.prototype.haragdah = function(){
    console.log(this.une + ' unetei materi baina.');
}
// var m1 = new Materi(1000000);
// m1.haragdah();

function Amitan(nas, une, ungu){
    Materi.call(this, une, ungu); 
    this.nas = nas;
}
Amitan.prototype = Object.create(Materi.prototype);
Amitan.prototype.hoolloh = function(){
    console.log(this.nas + ' nastai ' + this.une + ' unetei ' + this.ungu + ' ungutei amitan hoolloloo.');
}

function Hun(ner, nas, une, ungu){
    Amitan.call(this, nas, une, ungu);
    this.ner = ner;
}
Hun.prototype = Object.create(Amitan.prototype);
Hun.prototype.setgeh = function(bodol){
    console.log(this.ner + ' nertei ' + this.nas + ' nastai ' + this.une + ' unetei ' + this.ungu + ' ungutei hun "' + bodol + '" gej bodloo...');
}

var unee = new Amitan(20, 500000, 'alag');
unee.haragdah();
unee.hoolloh(); 

var p1 = new Hun('Tsedvee', 25, 150, 'Bor');
p1.haragdah(); 
p1.hoolloh();
p1.setgeh('JavaScript laitai yumaa');