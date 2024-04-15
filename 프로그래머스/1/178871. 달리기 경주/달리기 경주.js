function solution(players, callings) {
    // Create a map to store each player's index for quick access.
    const playerIndexMap = new Map(players.map((player, index) => [player, index]));

    // Process each calling by moving the called player ahead in the list.
    callings.forEach(calling => {
        const currentIndex = playerIndexMap.get(calling);
        if (currentIndex > 0) { // Ensure there is a player in front to swap with
            const previousIndex = currentIndex - 1;
            const previousPlayer = players[previousIndex];

            // Swap players in the array
            players[currentIndex] = previousPlayer;
            players[previousIndex] = calling;

            // Update the indices in the map
            playerIndexMap.set(calling, previousIndex);
            playerIndexMap.set(previousPlayer, currentIndex);
        }
    });

    return players;
}
