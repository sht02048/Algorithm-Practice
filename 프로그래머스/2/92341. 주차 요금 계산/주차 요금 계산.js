function solution(fees, records) {
  const parkingIn = {};
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

    if (status === "IN") {
      parkingIn[carNumber] = time;

      if (!carsFee[carNumber]) {
        carsFee[carNumber] = 0;
      }

      return;
    }

    if (status === "OUT") {
      const inTime = parkingIn[carNumber];
      const timeDifference = time - inTime;

      parkedTime[carNumber] === undefined ? parkedTime[carNumber] = timeDifference : parkedTime[carNumber] += timeDifference;

      delete parkingIn[carNumber];
    }
  });

  console.log(parkingIn);

  for (const leftCar in parkingIn) {
    const inTime = parkingIn[leftCar];
    const lastTime = 23 * 60 + 59;
    const timeDifference = lastTime - inTime;

    parkedTime[leftCar] === undefined ? parkedTime[leftCar] = timeDifference : parkedTime[leftCar] += timeDifference;
  }

  for (const car in parkedTime) {
    const time = parkedTime[car];

    carsFee[car] = standardFee;

    if (time > standardTime) {
      const totalFee = Math.ceil((time - standardTime) / unitTime) * unitFee;
      carsFee[car] += totalFee;
    }

  }

  const carInfo = Object.entries(carsFee).sort((a, b) => {
    const carNumberA = Number(a[0]);
    const carNumberB = Number(b[0]);

    return carNumberA - carNumberB
  });

  const answer = [];

  for (const [_, fee] of carInfo) {
    answer.push(fee)
  }

  return answer;
}