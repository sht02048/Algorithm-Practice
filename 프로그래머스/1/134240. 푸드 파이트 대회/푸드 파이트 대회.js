function solution(food) {
    let answer = "";
    const evenFood = food.map((menu, index) => {
        if (index !== 0 && menu % 2 !== 0) {
            return menu - 1;
        } 
        
        return menu
    });
    
    

    evenFood.forEach((menu, index) => {
        if (index === 0) {
            return;
        }

        answer += String(index).repeat(menu / 2);
    });
    
    const reversedFood = [...evenFood].reverse();
    
    answer += "0";
    
    reversedFood.forEach((menu, index) => {
        if (index === reversedFood.length - 1) {
            return;
        }
        
        answer += String(reversedFood.length - 1 - index).repeat(menu  / 2);
    })
    
    return answer;
}