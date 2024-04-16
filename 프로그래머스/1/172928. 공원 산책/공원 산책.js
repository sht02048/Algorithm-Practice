function solution(park, routes) {
    let startPoint = [];
    const directions = {
        E: [0, 1],
        W: [0, -1],
        S: [1, 0],
        N: [-1, 0]
    };
    
   park = park.map((row) => {
       return row.split("");
   })
    
    park.forEach((row, rowIndex) => {
        row.forEach((item, itemIndex) => {
            if (item === "S") {
                startPoint = [rowIndex, itemIndex];
            }
        })
    })
    
    for (const route of routes) {
        const [direction, distance] = route.split(" ");
        let [dx, dy] = startPoint;
        let isValid = true;
        
        for (let i = 0; i < distance; i += 1) {
            dx += directions[direction][0];
            dy += directions[direction][1];
            
            // console.log(dx, dy)
            
            if (
                dx < 0 ||
                dy < 0 ||
                dx >= park.length ||
                dy >= park[0].length ||
                park[dx][dy] === "X"
            ) {
                isValid = false;
            }
            
            // startPoint = [dx, dy];
            // park[dx][dy] = "X"
            // console.log(park[dx][dy])
        }
        
        if (isValid) {
            startPoint = [dx, dy];
        }
    }
    
    console.log(park)
    
    // console.log(park)
    
    return startPoint;
}