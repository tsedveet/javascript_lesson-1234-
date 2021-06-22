var img = {
    file: 'c:/images/a123.jpg',
    content: 'muur',
    zuragTanih: function(color, size){
        console.log('ene zurag deer ' + color + ' ungutei ' + size + ' hemjeetei ' + this.content + ' baigaa n tanigdlaa.');
    }
}
img.zuragTanih('har', 'jijighen');

var myImg = {
    file: 'c:/images/a123.jpg',
    content: 'nohoi',
}

//BIND
var mySuperZuragTanihFunction = img.zuragTanih.bind(myImg, 'shar', 'tom');
mySuperZuragTanihFunction(); 

//CALL  
img.zuragTanih.call(myImg, 'nogoon', 'dund zergiin');

//APPLY
var args = ['yagaan', 'avarga'];
img.zuragTanih.apply(myImg, args);
