function solution(s) {
    const arr = s.split("");
    let result = 0;
    let x = arr[0];
    let list = [1, 0]
    
    if (arr.length === 1) {
        return 1;
    }
    
    for (let i = 1; i < arr.length; i += 1) {
        const currentLetter = arr[i];
        
        if (currentLetter === x) {
            list[0] += 1;
        } else {
            list[1] += 1;
        }
        
        if (list[0] === list[1]) {
            result += 1;
            list = [0, 0];
            x = arr[i + 1];
            continue;
        }
        
        if (i === arr.length - 1) {
            result += 1;
        }
    }
    
    return result;
}