// Write your code below

let grade = process.argv[2];

if (!grade || Number.isNaN(grade) || grade.length <= 0 || grade.length >= 100) {
    console.log("Invalid Input");
}

else {
    let gradeInput = Number(grade);

    if (gradeInput >= 80) {
        console.log('A');
    } else if (gradeInput >= 70) {
        console.log('B');

    }else if (gradeInput >= 60) {
        console.log('C');

    }else if (gradeInput >= 50) {
        console.log('D');
    } else{
        console.log('F');
    }
}