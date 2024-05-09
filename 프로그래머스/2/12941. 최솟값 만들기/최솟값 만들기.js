function solution(A,B){
    let answer = 0;
    const sortedA = A.sort((a, b) => a - b);
    const sortedB = B.sort((a, b) => b - a);

    sortedA.forEach((value, index) => {
       answer += value * sortedB[index] ;
    });
    
    return answer;
}