const totalMarks = 92;
// (totalMarks > 40) ? console.log("Pass"):console.log("Failed")
// const result = totalMarks > 40 ? "Pass":"Failed" //Same Thing
// console.log(result)

const result1 = totalMarks < 40 ? "Failed": totalMarks < 60 ? "C":totalMarks < 70 ? "B":totalMarks < 80 ? "A": totalMarks <90 ? "A+":"Genius"
console.log(result1)