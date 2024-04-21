function solution(cards1, cards2, goal) {
    let i = 0;
    let j = 0;
    let isProblem = false;

    goal.forEach((word) => {
        if(word === cards1[i]) {
            i++ 
        } else if(word === cards2[j]) {
            j++
        } else {
            isProblem = true;
        }
    })

   return isProblem ? 'No' : 'Yes'   
}