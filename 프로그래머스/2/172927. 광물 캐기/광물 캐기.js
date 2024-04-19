function solution(picks, minerals) {
    const bundle = [];
    let fatigue = 0;
    let mineralScore = 0;
    let diamond = 0;
    let iron = 0;
    let stone = 0;
    
    minerals.forEach((mineral, index) => {
        switch (mineral) {
            case "diamond":
                mineralScore += 31;
                diamond += 1;
                break;
            case "iron":
                mineralScore += 6;
                iron += 1;
                break;
            case "stone":
                mineralScore += 1;
                stone += 1;
                break;
        }
        
        if (index % 5 === 4 || index === minerals.length - 1) {
            bundle.push({ mineralScore, diamond, iron, stone });
            mineralScore = 0;
            diamond = 0;
            iron = 0;
            stone = 0;
        }
    });
    
    const picksSum = picks.reduce((acc, cur) => acc + cur);
    const sortedBundle = [...bundle].sort((a, b) => b["mineralScore"] - a["mineralScore"]);
    
    if (picksSum < bundle.length) {
        bundle.pop();
        bundle.sort((a, b) => b["mineralScore"] - a["mineralScore"]);
        
        bundle.forEach((mineral) => {
      if (picks.reduce((acc, cur) => acc + cur) === 0) {
          return;
      }
        
      const diamondScore = mineral["diamond"];
      const ironScore = mineral["iron"];
      const stoneScore = mineral["stone"];
        
      if (picks[0] > 0) {
          fatigue += (diamondScore + ironScore + stoneScore);
          picks[0] -= 1;
          return;
      }
        
      if (picks[1] > 0) {
          fatigue += (diamondScore * 5 + ironScore + stoneScore);
          picks[1] -= 1;
          return;
      }
        
      if (picks[2] > 0) {
          fatigue += (diamondScore * 25 + ironScore * 5 + stoneScore);
          picks[2] -= 1;
          return;
      }
    });
        
        return fatigue;
    }
    
    sortedBundle.forEach((mineral) => {
      if (picks.reduce((acc, cur) => acc + cur) === 0) {
          return;
      }
        
      const diamondScore = mineral["diamond"];
      const ironScore = mineral["iron"];
      const stoneScore = mineral["stone"];
        
      if (picks[0] > 0) {
          fatigue += (diamondScore + ironScore + stoneScore);
          picks[0] -= 1;
          return;
      }
        
      if (picks[1] > 0) {
          fatigue += (diamondScore * 5 + ironScore + stoneScore);
          picks[1] -= 1;
          return;
      }
        
      if (picks[2] > 0) {
          fatigue += (diamondScore * 25 + ironScore * 5 + stoneScore);
          picks[2] -= 1;
          return;
      }
    });
    
    return fatigue;
}