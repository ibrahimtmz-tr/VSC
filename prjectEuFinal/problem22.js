
var fs = require('fs');
var data = fs.readFileSync('names.txt', 'utf8');

function splitAlphabet(){
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphabet = alphabet.split('');
    var alphabetL = alphabet.length;
    var numericValue = [];

    for(var i = 1; i<= alphabetL ; i++){
        numericValue[alphabet[i-1]] = i; 

    }

    return numericValue;
}


function namesScores(data){
    var names = [];
    var total = 0;
    var alphabetN = splitAlphabet();
    data = data.replace(/\"/g,"");
    names = data.split(',');
    names.sort();
    var namesL = names.length;

    for(var i=0; i < namesL; i++){
        
        var nameL = names[i].length;
        var nameLetter = names[i].split("");
        var sumLetter = 0;

        for(var j=0; j < nameL; j++){
            sumLetter += alphabetN[nameLetter[j]];
        }

        total += sumLetter * (i + 1);
    }




    console.log(total);


}

namesScores(data)
