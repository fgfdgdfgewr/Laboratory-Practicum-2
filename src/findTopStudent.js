export function findTopStudent(data) {
  if (data.length === 0) return null;
  return data.reduce((top, student) => student.score > top.score ? student : top).name;
}
