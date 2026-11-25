// Run with: node report.js

const grades = [
  { name: "Макар", score: 85 },
  { name: "Денис", score: 92 },
  { name: "Анна", score: 78 },
  { name: "Даша", score: 88 },
  { name: "Студент_X", score: 45 }
];

const PASS_SCORE = 60;

function calculateAverage(data) {
  if (data.length === 0) return 0;
  return data.reduce((sum, student) => sum + student.score, 0) / data.length;
}

function findTopStudent(data) {
  if (data.length === 0) return null;
  return data.reduce((top, student) => student.score > top.score ? student : top).name;
}

function filterFailed(data, passScore) {
  return data.filter(student => student.score < passScore).map(student => student.name);
}

function addLetterGrade(data) {
  return data.map(student => ({
    ...student,
    letter: student.score >= 90 ? "A" : student.score >= 75 ? "B" : "C"
  }));
}

function findOutstandingAssignments(data) {
  return data
    .filter(student => student.assignmentSubmitted === false)
    .map(student => student.name);
}

console.log("Средний балл группы:", calculateAverage(grades).toFixed(1));
console.log("Студент с最高 баллом:", findTopStudent(grades));

const hasSubmissionData = grades.some(student => typeof student.assignmentSubmitted === "boolean");
console.log(
  "Студенты с несданными заданиями:",
  hasSubmissionData ? findOutstandingAssignments(grades) : "нет данных о сдаче заданий"
);

console.log("Итоговый список с буквенными оценками:", addLetterGrade(grades));
