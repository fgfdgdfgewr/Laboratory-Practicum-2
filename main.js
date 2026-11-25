import { calculateAverage } from "./src/calculateAverage.js";
import { findTopStudent } from "./src/findTopStudent.js";
import { filterFailed } from "./src/filterFailed.js";
import { addLetterGrade } from "./src/addLetterGrade.js";

const grades = [
  { name: "Makar", score: 85 },
  { name: "Denis", score: 92 },
  { name: "Anna", score: 78 },
  { name: "Dasha", score: 88 },
  { name: "Student_X", score: 45 }
];

const PASS_SCORE = 60;

console.log("Group average:", calculateAverage(grades).toFixed(1));
console.log("Top student:", findTopStudent(grades));
console.log("Failed students:", filterFailed(grades, PASS_SCORE));

// The provided grade records do not include assignment-submission status.
// Once assignmentSubmitted (boolean) is supplied for each student, this lists
// students marked false without guessing submission data.
const submissionStatusAvailable = grades.every(
  student => typeof student.assignmentSubmitted === "boolean"
);
const outstandingAssignments = grades
  .filter(student => student.assignmentSubmitted === false)
  .map(student => student.name);
console.log(
  "Students with outstanding assignments:",
  submissionStatusAvailable ? outstandingAssignments : "Unavailable: submission status was not provided"
);

console.log("Final grades with letters:", addLetterGrade(grades));
