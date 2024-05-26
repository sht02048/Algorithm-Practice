function solution(k, tangerine) {
    const tangerines = {};
    tangerine.forEach(number => {
        if (tangerines[number]) {
            tangerines[number] += 1;
            return;
        }
        
        tangerines[number] = 1;
    });
    
    const numbers = Object.values(tangerines).sort((a, b) => b - a);
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i += 1) {
        sum += numbers[i];
        
        if (sum >= k) {
            return i + 1;
        }
    }
}