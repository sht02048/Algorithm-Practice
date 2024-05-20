function solution(storey) {
    let answer = 0;
    let log = 1;
    let number = storey;
    
    while (number > 0) {
        const multiplier = 10 ** log
        const currentNumber = number % multiplier;
        const nextNumber = number % 10 ** (log + 1);
        
        if (currentNumber > multiplier / 2 || (currentNumber >= multiplier / 2 && nextNumber >= 10 ** (log + 1) / 2 )) {
            number += multiplier - currentNumber;
            answer += Number(String(multiplier- currentNumber)[0]);
            continue;
        } else {
            number -= currentNumber;
            answer += Number(String(currentNumber)[0]);
        }
        
        log += 1;
    }
    
    return answer;
}