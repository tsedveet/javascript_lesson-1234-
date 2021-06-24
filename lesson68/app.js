var dontBlame = 'you are fucking idiot';
dontBlame = dontBlame.replace('fucking', '*******');
dontBlame = dontBlame.replace('idiot', '*****');
console.log(dontBlame);


var html = '<p>Hello world!!!</p><p>Hello world!!!</p><p>Hello world!!!</p>';
html = html.replace(/p/g, 'i');
console.log(html);

var incDiv = document.querySelector('.income');
incDiv.insertAdjacentHTML('beforeend', 'Tsalin: 20000000');
incDiv.insertAdjacentHTML('beforeend', '<br>Nemelt orlogo: 50000000');
var expDiv = document.querySelector('.expense');
expDiv.insertAdjacentHTML('beforeend', 'undaa: 5000');