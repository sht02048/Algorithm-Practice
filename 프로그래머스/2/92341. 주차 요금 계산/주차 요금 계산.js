function solution(fees, records) {
  const lastTime = 23 * 60 + 59;
  const parkedTime = {};
  const [standardTime, standardFee, unitTime, unitFee] = fees;
  const carsFee = {};

  records.forEach((record) => {
    const [time, carNumber, status] = record.split(" ").map((value, index) => {
      if (index === 0) {
        const [hour, minute] = value.split(":").map(Number);

        return hour * 60 + minute;
      }

      return value;
    });

    if (!parkedTime[carNumber]) parkedTime[carNumber] = 0;
    if (status === "IN") parkedTime[carNumber] += lastTime - time;
    if (status === "OUT") parkedTime[carNumber] += time - lastTime;
  });

  const feesSortedByCarNumber = Object.entries(parkedTime).map((info) => {
    let totalFee = standardFee;
    const [carNumber, time] = info;

    if (time > standardTime) {
      const additionalFee =  Math.ceil((time - standardTime) / unitTime) * unitFee;
      totalFee += additionalFee;
    }

    return [carNumber, totalFee];
  })
  .sort((a, b) => {
      const carNumberA = Number(a[0]);
      const carNumberB = Number(b[0]);

      return carNumberA - carNumberB
  });

  const answer = feesSortedByCarNumber.map(([_, fee]) => fee);

  return answer;
}