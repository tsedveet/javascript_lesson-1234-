// var m = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
// var m = [];
// m.push('Jan');
// m.push('Feb');
// m.push('Mar');
// var x = m.slice(1, 3);
// console.log(x);
// console.log(m);
// var m1 = new Array('hi', 'hello', 'how are you');
// console.log(m1[2]);

// var m2 = [1, true, 'hello', {name:'Tsedvee'}, null];
// console.log(m2);

// m.splice(1, 10);


var course = {
    name : 'Javascrip heliig ehnees duustal',
    price : 199000,
    lessons : [
        {
            name: 'Ene surgaltaar bid yu surch ezemshih ve!',
            length: '11:18'
        },
        {
            name: 'Javascript hel uussen tuuh',
            length: '32:08'
        }
    ]
}

console.log(course.name + ' surgaltiin une ' + course.price + '₮ baina. Lesson №1 : "' + course.lessons[0].name + '" video-nii urt : ' + course.lessons[0].length);
