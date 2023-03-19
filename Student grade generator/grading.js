 //student grading function
 function gradeStudent(marks){
    //checking where the marks lie
    //range 80-100
    if(marks > 79 && marks <= 100){
        grade = "A";
    }
    //range 60-79
    else if(marks <= 79 && marks >= 60){
        grade = "B";
    }
    //range 49-59
    else if(marks <= 59 && marks >= 49){
        grade = "c";
    }
    //range 40-48
    else if(marks <= 48 && marks >= 40){
        grade = "D";
    }
    //less than or equal to 39
    else if(marks < 40){
        grade = "E";
    }
    // any value outside the range of 0 - 100
    else {
        grade = "Invalid grade input"
    }
    return grade;
 }
//prompt user to enter grade
let score= prompt("Enter your marks: ")
// calling the function
console.log(gradeStudent(score))

