medeelel('Tsedvee', 'programmer', 80);
medeelel('Geegee', 'IR', 99.9);

function medeelel(name, job, avgMark){
    switch(job){
        case 'teacher' : console.log(name + ' is a tacher'); break;
        case 'painter' : console.log(name + ' is a painter'); break;
        case 'IR' : console.log(name + ' is an Internation Relation'); break; 
        case 'programmer' : console.log(name + ' is a programmer'); break;
        default: console.log('idk ' + name + ' is maybe beggar');
    }

    switch(true){
        case avgMark >= 90 : console.log(name + ' is excellent'); break;
        case avgMark < 90 && avgMark >= 80 : console.log(name + ' is good'); break;
        case avgMark < 80 && avgMark >= 70 : console.log(name + ' is medium'); break;
        default: console.log(name + ' is bad!! Hey do homework');
    }
}