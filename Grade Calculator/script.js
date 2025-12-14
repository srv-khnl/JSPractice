const fname = prompt("Enter Your Full Name");  
const marks = [];
let total = 0;
let grade;
const calcAvg = (total) => {  
    return total / marks.length;
}

for (let i = 0; i < 5; i++) {
    marks[i] = Number(prompt(`Enter the marks of subject ${i + 1}`));  
    total += marks[i];
}

average = calcAvg(total)


switch (true) {
    case (average >= 0 && average < 40):
        grade = "F";
        break;
    case (average >= 40 && average < 50):
        grade = "C";
        break;
    case (average >= 50 && average < 60):
        grade = "C+";
        break;
    case (average >= 60 && average < 70):
        grade = "B";
        break;
    case (average >= 70 && average < 80):
        grade = "B+";
        break;
    case (average >= 80 && average < 90):
        grade = "A";
        break;
    case (average >= 90 && average <= 100):
        grade = "A+";
        break;
    default:
        grade = "Unexpected Average Marks";
}

console.log(`
            Full Name: ${fname}
            Total Marks: ${total}
            Average Marks: ${average}
            Grade: ${grade}`
    );
