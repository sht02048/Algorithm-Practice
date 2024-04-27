function solution(number, limit, power) {
    let answer = 0;

    for (let i = 1; i <= number; i++) {
        let divisor = 0;

        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                divisor += (j * j === i) ? 1 : 2;
            }

            if (divisor > limit) {
                break;
            }
        }

        if (divisor > limit) {
            answer += power;
        } else {
            answer += divisor;
        }
    }

    return answer;
}
