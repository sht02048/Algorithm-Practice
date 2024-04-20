function solution(prices) {
    const result = Array.from({ length: prices.length }, () => 0);
    
    prices.forEach((price, index) => {
        for (let i = index + 1; i < prices.length; i += 1) {
            result[index] += 1;
            if (prices[i] < price) {
                return;
            }
        }
    });
    
    return result;
}