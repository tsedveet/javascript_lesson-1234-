var Income = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
}

var Expense = function(id, descroption, value){
    this.id = id;
    this.description = descroption;
    this.value = value;
}

var i1 = new Income(1, "Salary", 2500000);
var i2 = new Income(1, 'Sugalaa', 3000000);

// console.log(i1);
// console.log(i2);

var incomes = [];

incomes.push(i1);
incomes.push(i2);

// console.log(incomes);

console.log(incomes[1].description);