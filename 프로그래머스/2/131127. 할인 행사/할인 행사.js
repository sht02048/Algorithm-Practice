function solution(want, number, discount) {
    const shoppingCart = {};
    const totalItemNumber = number.reduce((a, b) =>  a + b);
    let answer = 0;
    
    want.forEach((item, index) => {
       shoppingCart[item] = number[index];
    });
    
    for (let i = 0; i <= discount.length - totalItemNumber; i += 1) {
        const requiredItems = {...shoppingCart};
        
        for (let j = i; j < i + totalItemNumber; j += 1) {
            const currentItem = discount[j];
            
            requiredItems[currentItem] -= 1;
        }
        
        let didBuyEverything = true;
        Object.values(requiredItems).forEach(value => {
          if (value !== 0) {
              didBuyEverything = false;
          }  
        });
        
        if (didBuyEverything) {
            answer += 1;
        }
    }
    
    return answer;
}