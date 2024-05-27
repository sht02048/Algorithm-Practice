function solution(topping) {
    const cakeA = {};
    const cakeB = new Set();
    
    let answer = 0;
    let typeOfToppings = 0;

    for (let i = 0; i < topping.length; i++) {        
        if (cakeA[topping[i]]) {
            cakeA[topping[i]]++;
        } else {
            cakeA[topping[i]] = 1;
            typeOfToppings++;       
        }
    }

    for (let i = 0; i < topping.length; i++) {
        cakeB.add(topping[i]);
        cakeA[topping[i]]--;

        if (cakeA[topping[i]] === 0) {
            typeOfToppings--;
        }
        
        if (cakeB.size === typeOfToppings) {
            answer++;
        }
    }
    
    return answer;
}