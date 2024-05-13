function solution(n) {
    let answer = 0;
    String(n).split("").forEach((value) => {
        answer += Number(value)
    });
    
    return answer;
}