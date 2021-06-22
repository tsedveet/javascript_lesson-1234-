try{
    console.log('Program ehellee');
var x = prompt('Ta 1-100 hoorond too oruulna uu!');
console.log('Tanii oruulsan too bol: ' +x); 

computeNewSpeed();

}catch(error){
    if(error.message === 'prompt is not defined'){
        console.log('Sorry, ene codiig browseriin orchind ajilluulna.');
    }else{
        console.log('Aldaa: ' +error);
    }
}