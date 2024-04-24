function solution(t, p) {
    const numbers = [];
    
    for (let i = 0; i <= t.length - p.length; i += 1) {
        let letters = t[i];
        
        for (let j = i + 1; j < p.length + i; j += 1) {
            letters += t[j];
        }
        
        numbers.push(Number(letters));
    }
    
    return numbers.filter((value) => value <= Number(p)).length;
}