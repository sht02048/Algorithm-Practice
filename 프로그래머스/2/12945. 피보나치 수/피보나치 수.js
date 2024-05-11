function solution(n) {
    const finn = {
        0: 0,
        1: 1,
        2: 1,
    };
    const standardNumber = 1234567;
    let count = 3;
    while (count <= n) {
        finn[count] = finn[count - 1] % 1234567 + finn[count - 2] % 1234567;
        count += 1;
    };
    
    return finn[n] % standardNumber;
}