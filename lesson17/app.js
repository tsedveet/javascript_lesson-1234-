var h1 = {
    name: 'Tsedvee',
    job: 'programist',
    hobby: 'sport'
}

var h2 = {
    name: 'Anonymous',
    job: 'IDK',
    hobby: 'Hacking',
    address:{
        location: 'BZD 10 khoroo 97 toot',
        city: 'Ulaanbaatar',
        country: 'Mongolia'
    }
}

// console.log(h1.name, h2.hobby);

var c1 = {
    name: 'JavaScript heliig ehnees n duustal',
    lessonCount: 116,
    totalMin: 805,
    author: h1,
    price: 199000,
    discount: 26900,
    computeHour: function(){
        return Math.round(this.totalMin/60);
    },

    computeMin: function(){
        return this.totalMin%60;
    }
}

var c2 = {
    name: 'HTML, CSS ehnees n duustal',
    lessonCount: 145,
    totalMin: 1025,
    author: h2,
    price: 150000,
    discount: 26900,
    information: function(){
        console.log(this.author.address.country + ' -d amidardag. ' + this.author.hobby + ' hobbytoi');
    },

    computeHour: function(){
        return Math.round(this.totalMin/60);
    },

    computeMin: function(){
        return this.totalMin%60;
    }
}

console.log(c2.name + ' surgalt n ' + c2.computeHour() + ' tsag ' + c2.computeMin() + ' minuttai.');
console.log(c1.name + ' surgalt n ' + c1.computeHour() + ' tsag ' + c1.computeMin() + ' minuttai.');

console.log(c1.computeHour() + c2.computeHour() + ' tsag ' + (c1.computeMin() + c2.computeMin()) + ' minuttai.');

// c2.information();


var aaa = 'author';
var bbb = 'hobby';
// console.log(c2[aaa][bbb]);
// console.log(c2.author.address.country);