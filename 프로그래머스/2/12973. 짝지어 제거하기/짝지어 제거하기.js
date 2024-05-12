function solution(s) {
    const arr = s.slice(1);
    const stack = [s[0]];
    
    for (const alphabet of arr) {
        if (stack.length === 0) {
            stack.push(alphabet);
            continue;
        }
        
        const lastStack = stack.pop();
        
        if (alphabet === lastStack) {
            continue;
        }
        
        stack.push(lastStack, alphabet);
    }
    
    return stack.length === 0 ? 1 : 0
}