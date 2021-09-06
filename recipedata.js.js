let stringArray = [];

function removeChars(string) {
    string.split('').forEach(char => {
        stringArray.splice(stringArray.indexOf(char), 1);
    })
}

function unjumbleNums(string){
    stringArray = string.split('');
    let numArray = [];

    while(stringArray.length > 0) {
        if(stringArray.includes('z')) {
            numArray.push(0);
            removeChars("zero");
        }
        if(stringArray.includes('w')) {
            numArray.push(2);
            removeChars("two");
        }
        if(stringArray.includes('x')) {
            numArray.push(6);
            removeChars("six");
        }
        if(stringArray.includes('g')) {
            numArray.push(8);
            removeChars("eight");
        }
        if(stringArray.includes('f') && stringArray.includes('o') && stringArray.includes('u') && stringArray.includes('r')) {
            numArray.push(4);
            removeChars("four");
        }
        if(stringArray.includes('t') && stringArray.includes('h') && stringArray.includes('r') && stringArray.includes('e') && stringArray.includes('e', 2)) {
            numArray.push(3);
            removeChars("three");
        }
        if(stringArray.includes('f') && stringArray.includes('i') && stringArray.includes('v') && stringArray.includes('e')) {
            numArray.push(5);
            removeChars("five");
        }
        if(stringArray.includes('s') && stringArray.includes('e') && stringArray.includes('v') && stringArray.includes('e', 2) && stringArray.includes('n')) {
            numArray.push(7);
            removeChars("seven");
        }
        if(stringArray.includes('n') && stringArray.includes('i') && stringArray.includes('n', 2) && stringArray.includes('e')) {
            numArray.push(9);
            removeChars("nine");
        }
        if(stringArray.includes('o') && stringArray.includes('n') && stringArray.includes('e')) {
            numArray.push(1);
            removeChars("one");
        }
        
    }
    return numArray.sort().join('');
}

console.log(unjumbleNums("reuonnoinfe"));
console.log(unjumbleNums("eetterfwhoeofnevfrtiivrueohe"));
console.log(unjumbleNums("rutwiunfvoetfnooennoenonvneefnseefiugooenhwtreowteiruforiion"));