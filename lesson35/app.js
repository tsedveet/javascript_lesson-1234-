console.log(this);

var p1 = {
    name : 'Tsedvee',
    printThis : function(){
        console.log(this);
        function secondFunction(){
            console.log('secondFunction ajillaa : ' + this);
        }
        secondFunction();
    }
}

var p2 = {
    name: 'Geegee'
}

p2.printThis = p1.printThis;

p1.printThis();
p2.printThis();