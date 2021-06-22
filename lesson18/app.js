var helnuud = ['JavaScript', 'php', 'c#', 'react', 'python'];
// utgiig darj uur utga hiij bn.
helnuud[1] = 'Go';
// 4-r indexd nemj bn;
helnuud[4] = 'C++';
// hamgiin suuliin elemented nemj bn.
helnuud[helnuud.length] = 'Assembler';
//hamgiin ehniii elemented utga nemj oruulj bn.
helnuud.unshift('perl');
// shift(); hamgiin ehnii elementiig ustgaj bn.
helnuud.shift();
// push(); n hamgiin ariin elemented nemj bn.
helnuud.push('ruby');
// hamgiin suuliin elementiig hevlej bn.
console.log(helnuud[helnuud.length - 1]);
// pop(); hamgiin ar taliin elementiig console ruu gargaj bn.
console.log(helnuud.pop());
//yamar element ustgasnaa ingej harj bolno 
console.log(helnuud.shift());
console.log(helnuud.indexOf('python') + ' python helnii index hevleh function');
if(helnuud.indexOf('react') === -1){
    console.log('Ene hel jagsaaltad bhgui bn');
}else{
    console.log(helnuud.indexOf('react') + ' index deer bn.');
}
console.log(helnuud.length + ' helnuud baina.');
console.log(helnuud[3]);
console.log(helnuud);
