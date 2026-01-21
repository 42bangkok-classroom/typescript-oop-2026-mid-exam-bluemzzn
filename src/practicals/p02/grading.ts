// Write your code below

let grade = process.argv[2];

if (!grade ) {
    console.log("Invalid input");
    process.exit();
}

let gradeInput = Number(grade);
if (Number.isNaN(gradeInput) || gradeInput < 0 || gradeInput > 100 ) {
    console.log("Invalid input");
}

else {

    if (gradeInput >= 80) {
        console.log('Grade is A');
    } else if (gradeInput >= 70) {
        console.log('Grade is B');

    }else if (gradeInput >= 60) {
        console.log('Grade is C');

    }else if (gradeInput >= 50) {
        console.log('Grade is D');
    } else{
        console.log('Grade is F');
    }
}