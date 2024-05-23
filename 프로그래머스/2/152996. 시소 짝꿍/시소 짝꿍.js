function solution(weights) {
    let weightsLength = weights.length;
    let answer = 0;

    let weightsDistance = new Array(4001).fill(0);
    let weightsReal = new Array(1001).fill(0);

    for (let i = 0; i < weightsLength; i++) {
        let d2 = weights[i] * 2;
        let d3 = weights[i] * 3;
        let d4 = weights[i] * 4;

        answer += weightsDistance[d2];
        answer += weightsDistance[d3];
        answer += weightsDistance[d4];

        if (weightsReal[weights[i]] > 0) {
            answer -= weightsReal[weights[i]] * 2;
        }

        weightsReal[weights[i]]++;
        weightsDistance[d2]++;
        weightsDistance[d3]++;
        weightsDistance[d4]++;
    }

    return answer;
}