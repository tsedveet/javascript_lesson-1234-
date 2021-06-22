var a = prompt('Ta onoo oruulna uu!!!')


if(a !== null){
    var now = new Date().getFullYear();
    var result = now-a;
    var message = 'Tanii nas bol : ' +result;
    if(result>18){
        console.log("Ta nasand hursen hun bn!");
    }
    else if(result > 15){ 
        console.log("Ta ahlah angiin suragch bn!");
    }
    else if(result > 10){
        console.log("ta dund angiin huuhed bn!");
    }
    else{
        console.log("Ta joohon huuhed bn!!");
    }

    alert(message);
}
else{
    alert("Ta onoo oruulaagui bn!!!");
}
