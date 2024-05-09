function solution(s) {
    const sortedNumber = s.split(" ").sort((a, b) => a - b);
    
    return sortedNumber[0] + " " + sortedNumber[sortedNumber.length - 1];
}