export function filterFailed(data, passScore) {
  return data
    .filter(student => student.score < passScore)
    .map(student => student.name);
}
