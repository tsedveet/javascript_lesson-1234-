var name = 'Tsedvee';
var job = 'programmer';

if(job === 'teacher'){
    console.log( name + ' is teacher');
}else if(job === 'painter'){
    console.log(name + ' is painter');
}else if(job === 'programmer'){
    console.log(name + ' is programmer');
}else{
    console.log('idk, ' + name + ' is maybe beggar');
}

switch(job){
    case 'teacher' : console.log(name + ' is a tacher'); break;
    case 'painter' : console.log(name + ' is a painter'); break;
    case 'programmer' : console.log(name + ' is a programmer'); break;
    default: console.log('idk ' + name + ' is maybe beggar');
}

var avgMark = 69;

if(avgMark >= 90){
    console.log(name + ' is excellent');
}else if(avgMark < 90 && avgMark >= 80){
    console.log(name + ' is good');
}else if(avgMark <80 && avgMark >= 70){
    console.log(name + ' is medium');
}else{
    console.log(name + ' is bad _!_');
}

switch(true){
    case avgMark >= 90 : console.log(name + ' is excellent'); break;
    case avgMark < 90 && avgMark >= 80 : console.log(name + ' is good'); break;
    case avgMark < 80 && avgMark >= 70 : console.log(name + ' is medium'); break;
    default: console.log(name + ' is bad!! Hey do homework');
}