function solution(a, b, n) {
    let emptyBottles = n;
    let answer = 0;

    while (emptyBottles >= a) {
        let newBottles = Math.floor(emptyBottles / a); 
        answer += newBottles * b;                     
        emptyBottles = emptyBottles % a + newBottles * b; 
    }
    
    return answer;
}