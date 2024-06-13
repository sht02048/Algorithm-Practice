function solution(progresses, speeds) {
  const days = progresses.map((progress, index) => {
    const speed = speeds[index];
    return Math.ceil((100 - progress) / speed);
  });

  const answer = [];
  let daysTook = null;
  let dayCount = 0;

  while (days.length > 0) {
    const day = days.shift();

    if (daysTook === null) {
      daysTook = day;
      dayCount += 1;
    } else if (day <= daysTook) {
      dayCount += 1;
    } else {
      answer.push(dayCount);
      dayCount = 1;
      daysTook = day;
    }
  }

  answer.push(dayCount)
  return answer;
}