function Animal(ner){
    this.name = ner;
}
Animal.prototype.hoolloh = function(){
    console.log(this.name + ' hoolloloo.');
}

var a1 = new Animal('Uher');
a1.hoolloh();
var a2 = new Animal('Yamaa');
a2.hoolloh();
var a3 = new Animal('Aduu');
a3.hoolloh();