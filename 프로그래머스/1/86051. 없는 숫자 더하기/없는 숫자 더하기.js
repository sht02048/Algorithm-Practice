function solution(numbers) {
    let answer = 0;
    const numberMap = new Map([
        [0, false],
        [1, false],
        [2, false],
        [3, false],
        [4, false],
        [5, false],
        [6, false],
        [7, false],
        [8, false],
        [9, false],
    ]);
    
    
    numbers.forEach((number) => {
        if (numberMap.has(number)) {
            numberMap.set(number, true);
        }
    });
    
    numberMap.forEach((value, key) => {
        if (value === false) {
            answer += key;
        }
    });
    
    return answer;
}

