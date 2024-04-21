function solution(cards1, cards2, goal) {
    const words = {};
    
    goal.forEach((word, index) => {
        words[word] = index;
    });
    
    const indexedCards1 = cards1.map((card) => words[card]);
    const indexedCards2 = cards2.map((card) => words[card]);
    console.log(indexedCards1);
    console.log(indexedCards2);
    
    for (let i = 0; i < indexedCards1.length - 1; i += 1 ) {
        const currentCard = indexedCards1[i];
        const nextCard = indexedCards1[i + 1];
        
        if (nextCard < currentCard || (currentCard === undefined && nextCard !== undefined)) {
            return "No";
        }
    }
    
    for (let i = 0; i < indexedCards2.length - 1; i += 1 ) {
        const currentCard = indexedCards2[i];
        const nextCard = indexedCards2[i + 1];
        
        if (nextCard < currentCard || (currentCard === undefined && nextCard !== undefined)) {
            return "No";
        }
    }
    
    return "Yes"
}