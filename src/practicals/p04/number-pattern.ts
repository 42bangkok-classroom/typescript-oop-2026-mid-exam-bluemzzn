// Write your code below


let numberPattern = process.argv[2];

if (!numberPattern || numberPattern.trim() === "") {
    console.log("Invalid input");
    process.exit();
}

let numberPatternInput = Number(numberPattern);
if (Number.isNaN(numberPatternInput) || numberPatternInput < 0 || numberPatternInput > 100) {
    console.log("Invalid input");
}

else {
    for (let i = 1; i <= numberPatternInput; i++) {
        let str = '';
        for (let j = (numberPatternInput -1); j >= i; j--) {
            str += j + '';
        }
        for(let k = i; k>= 1; k--){
           console.log(k);
            
        }
        console.log(str);
    }
}
