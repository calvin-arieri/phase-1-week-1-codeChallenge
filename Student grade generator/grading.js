 //student grading function
 function gradeStudent(marks){
function calculateGrades(marks){
    if(marks > 79 && marks <= 100){
        return "A";
    }
    else if(marks <= 79 && marks >= 60){
        return "B";
    }
    else if(marks <= 59 && marks >= 49){
        return "c";
    }
    else if(marks <= 48 && marks >= 40){
        return "D";
    }
    else if(marks < 40){
        return "E";
    }
    else {
        return "Invalid grade input"
    }
}

let grade = prompt('Enter grade: ')
console.log(calculateGrades(grade))
 }
//prompt user to enter grade
let score= prompt("Enter your marks: ")
// calling the function
console.log(gradeStudent(score))

