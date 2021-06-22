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

console.log(h1.name, h2.hobby);

var c1 = {
    name: 'JavaScript heliig ehnees n duustal',
    lessonCount: 116,
    totalMin: 805,
    author: h1,
    price: 199000,
    discount: 26900
}

var c2 = {
    name: 'HTML, CSS ehnees n duustal',
    lessonCount: 145,
    totalMin: 1025,
    author: h2,
    price: 150000,
    discount: 26900
}

console.log(c2.author.address.country + ' amidardag.');