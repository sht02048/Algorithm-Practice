function solution(s, skip, index) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";
    
    const skippedAlphabets = alphabets.filter((alphabet) => 
        !skip.includes(alphabet)
    );
    
    for (const letter of s) {
        const letterIndex = skippedAlphabets.indexOf(letter) + index;
        const alphabetLength = skippedAlphabets.length;
        
        result += skippedAlphabets[letterIndex % alphabetLength];
    }
    
    return result;
}