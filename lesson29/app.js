function mendchileh(){
    var friend = 'Capaa';
    console.log('Saina uu? ' + friend);
    ajiltTurulAsuuh();

    function bye(){
        console.log(friend + ' yrii2');
    }
    function ajiltTurulAsuuh(){
        var job = 'web designer';
        console.log(friend + ' ajil jne her baina daa?');
        console.log(job + ' ajliig sonirhoj baina uu?');
        
        aavEejiigAsuuh();
        bye();

        // scope chaining
        function aavEejiigAsuuh(){
            console.log(friend + ' Aav eej n saina uu?');
            console.log(job + ' ajil uneheer sain tsalintai yum bnlee');

            bye();
        }

    }
}

mendchileh();
ajiltTurulAsuuh();
