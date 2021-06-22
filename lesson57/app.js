function interviewQuestion(job){
    if(job === 'programmer'){
        return function(name){
            console.log(name + ', Ta PROTOTYPE gej yu bolohiig medeh uu?');
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log(name + ', Ta heddugeer angid hicheel orj chadah ve?');
        }
    }else if(job === 'driver'){
        return function(name){
            console.log(name + ', Ta motocycle barij chadah uuu');
        }
    }
}

var programmerQuestion = interviewQuestion('programmer');
var teacherQuestion = interviewQuestion('teacher');
var driverQuestion = interviewQuestion('driver');
programmerQuestion('Tsedvee');
teacherQuestion('Geegee');
driverQuestion('Boldoo');

interviewQuestion('programmer')('Цдв');