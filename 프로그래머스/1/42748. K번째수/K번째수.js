function solution(array, commands) {
    const result = [];
    
    commands.forEach((arr) => {
        const [firstIndex, lastIndex, targetIndex] = arr;
        const sliced = array.slice(firstIndex - 1, lastIndex).sort((a , b) => a - b);
        
        result.push(sliced[targetIndex - 1]);
    });
    
    return result;
}