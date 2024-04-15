function solution(players, callings) {
    
    const ordersByIndex = new Map();
    const ordersByName = new Map();
    
    players.forEach((player, index) => ordersByIndex.set(index, player));
    players.forEach((player, index) => ordersByName.set(player, index));

    for (let i = 0; i < callings.length; i += 1) {
        const playerIndex = ordersByName.get(callings[i]);
        const frontPlayer = ordersByIndex.get(playerIndex - 1);
        
        ordersByIndex.set(playerIndex, frontPlayer);
        ordersByIndex.set(playerIndex - 1, callings[i]);
        ordersByName.set(frontPlayer, playerIndex);
        ordersByName.set(callings[i], playerIndex - 1);
    }
    
    return ([...ordersByIndex.values()]);
}