function totalMarks(...marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    console.log("Total:", sum);
}

totalMarks(10, 20, 30);