function solution(operations) {
  const q = [];
  const insert = num => q.push(num);
  const removeMinOrMax = isMin => {
    const index = q.findIndex(num => num === Math[isMin ? 'min' : 'max'](...q));
    q.splice(index, 1);
  };

  operations.forEach(o => {
    const [act, num] = o.split(' ');
    act === 'I' ? insert(+num) : removeMinOrMax(+num === -1);
  });

  return q.length === 0 ? [0, 0] : [Math.max(...q), Math.min(...q)];
}
