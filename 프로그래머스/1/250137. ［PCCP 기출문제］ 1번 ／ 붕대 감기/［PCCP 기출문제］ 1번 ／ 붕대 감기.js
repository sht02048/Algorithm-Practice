function solution(bandage, health, attacks) {
    const totalTime = attacks[attacks.length - 1][0];
    const [healDuration, heal, bonusHeal] = bandage;
    const attacksByTime = {};
    let playerHealth = health;
    let succesiveHeal = 0;
    
    attacks.forEach((attack) => {
        const [attackTime, damage] = attack;
        
        attacksByTime[attackTime] = damage;
    });
    
    for (let i = 1; i <= totalTime; i += 1) {
        if (playerHealth <= 0) {
            return -1;
        }
        
        if (attacksByTime[i]) {
            playerHealth -= attacksByTime[i];
            succesiveHeal = 0;
            continue;
        }
        
        if (playerHealth + heal >= health) {
            playerHealth = health;
        } else {
            playerHealth += heal;    
        }

        succesiveHeal += 1;
        
        if (succesiveHeal === healDuration) {
            if (playerHealth + bonusHeal >= health) {
                playerHealth = health;
            } else {
                playerHealth += bonusHeal;    
            }

            succesiveHeal = 0;
        }
    }
    
    return playerHealth > 0 ? playerHealth : -1;
}