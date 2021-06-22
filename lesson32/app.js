// function print(name, country, city, age){
//     console.log(country + ' улсын ' + city + ' хотод амьдардаг ' + name + ' нь ' + age + ' настай.');
// }

// print('Tsedvee', 'Mongolia', 'Ulaanbaatar', 25);

// ------------------------ arugments jishee

function print(name, country, city, age){
    console.log(arguments);
    console.log(arguments[1] + ' улсын ' + arguments[2] + ' хотод амьдардаг ' + arguments[0] + ' нь ' + arguments[3] + ' настай.');
}

print('Tsedvee', 'Mongolia', 'Ulaanbaatar', 25);
