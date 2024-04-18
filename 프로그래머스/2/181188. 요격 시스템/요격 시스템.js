function solution(targets) {
    const array = targets.slice().sort((a, b) => b[0] - a[0]);
    let [s, e] = array.shift();
    let answer = 1;
    
    for (const target of array) {
        const [s_t, e_t] = target;
        
        if (e_t <= s) {
            answer += 1;
            s = s_t;
        }
    }
    
    return answer;
}