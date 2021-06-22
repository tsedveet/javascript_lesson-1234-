// value (primitive)

var a = 12;
var b = a;

a = 13;

console.log('a = ' +a);
console.log('b = ' +b);

// reference

var p1 = {
  name: 'notebook',
  price: '300$'
};

var p2 = p1;
p2.price=100;

console.log('p1 = ' +p1.name+ ', ' +p1.price);
console.log('p2 = ' +p2.name+ ', ' +p2.price);

var x = [2, 6, 10];
var y = x;

y[0] = 50;


console.log(x);
console.log(y);

var name = 'notebook';
var price = 250000;

console.log(name+ ' buteegdehuunii une: ' +price);
info(name, price);
function info(name, price){
  console.log(name + ' nertei buteegdehuun ' +price+ ' unetei baisnaa');
  price = price - 5000;

  console.log(price+ 'unetei bolj hyamdarlaa....')
}


console.log('---------------------------------------------')
var product = {
  name: 'shoe',
  price: 15000
};

infoNew(product);

console.log(product.name+ ' product-n une: ' +product.price);

function infoNew(p){
  console.log(p.name+ ' nertei buteegdeguun ' +p.price+ ' unetei baisnaa');
  p.price = p.price - 11000;
  console.log(p.price+ ' unetei bolj sell zarlalaa...');
}
