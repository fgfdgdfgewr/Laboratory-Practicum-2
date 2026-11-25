export function calculateAverage(data) {
  if (data.length === 0) return 0;
  return data.reduce((sum, student) => sum + student.score, 0) / data.length;
}
