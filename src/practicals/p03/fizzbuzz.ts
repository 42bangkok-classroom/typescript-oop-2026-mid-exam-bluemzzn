// Write your code below

let fizzBuzz = process.argv[2];

if (!fizzBuzz || fizzBuzz.trim() === "") {
    console.log("Invalid input");
    process.exit();
}


let fizzBuzzInput = Number(fizzBuzz);
if (Number.isNaN(fizzBuzzInput) || fizzBuzzInput < 0 || fizzBuzzInput > 100) {
    console.log("Invalid input");
    
}

else {
    for (let i = 1; i <= fizzBuzzInput; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
            continue;

        } else if (i % 3 === 0) {
            console.log("Fizz");
            continue;

        } else if (i % 5 === 0) {
            console.log("Buzz");
            continue;

        }
        console.log(i);
    }
}