function solution(wallpaper) {
    const nestedWallpaper = wallpaper.map((arr) => arr.split(""));
    const directions = {
        N: 51,
        W: 51,
        E: -1,
        S: -1
    };
    
    nestedWallpaper.forEach((array, row) => {
        array.forEach((file, column) => {
            if (file === ".") {
                return;
            }
            
            const n = row;
            const w = column;
            const e = row + 1;
            const s = column + 1;
            
                        
            if (directions.W > w) {
                directions.W = w;
            }
            
            if (directions.N > n) {
                directions.N = n;
            }
            
            if (directions.E < e) {
                directions.E = e;
            }
            
            if (directions.S < s) {
                directions.S = s;
            }
        });
    });
    
    return Object.values(directions);
}