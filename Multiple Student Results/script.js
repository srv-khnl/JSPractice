let students = [];

function calculateTotal(marks) {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    return total;
}

function calculateAverage(total, count) {
    return total / count;
}

function calculateGrade(avg) {
    if (avg >= 90) return 'A+';
    if (avg >= 80) return 'A';
    if (avg >= 70) return 'B+';
    if (avg >= 60) return 'B';
    if (avg >= 50) return 'C';
    if (avg >= 40) return 'D';
    return 'F';
}

function addStudent() {

    let fullname = document.getElementById("fullname").value.trim();
        if (fullname === "") {
        alert("Full name cannot be empty.");
        return;
    }
      let marks = [
        Number(document.getElementById("english").value),
        Number(document.getElementById("maths").value),
        Number(document.getElementById("science").value),
        Number(document.getElementById("computer").value),
        Number(document.getElementById("social").value)
    ];

    let total = calculateTotal(marks);
    let avg = calculateAverage(total, marks.length);
    let grade = calculateGrade(avg);

    students.push([fullname, total, avg, grade]);


    let tableRows = "";
    let topperIndex = 0;
    let classTotal = 0;

    for (let i = 0; i < students.length; i++) {
        let student = students[i];

        tableRows += `
            <tr>
                <td>${student[0]}</td>
                <td>${student[1]}</td>
                <td>${student[2].toFixed(2)}</td>
                <td>${student[3]}</td>
            </tr>
        `;

        classTotal += student[2];
        if (student[2] > students[topperIndex][2]) {
            topperIndex = i;
        }
    }

    document.getElementById("output").innerHTML = tableRows;

    let classAvg = students.length ? classTotal / students.length : 0;

    document.getElementById("results").innerHTML = `
        <strong>Topper:</strong> ${students[topperIndex]?.[0]}<br>
        <strong>Class Average:</strong> ${classAvg.toFixed(2)}
    `;
    document.querySelector("form").reset();

}
