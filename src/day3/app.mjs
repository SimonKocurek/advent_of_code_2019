import fs from 'fs';

const directions = {
    'R': [1, 0],
    'L': [-1, 0],
    'U': [0, 1],
    'D': [0, -1]
};

let cords = fs.readFileSync('src/day3/input.txt')
    .toString()
    .split(/\r?\n/)
    .map(cord => {
        return cord
            .split(',')
            .map(step => [directions[step[0]], Number(step.slice(1))]);
    });

let visited = {0: new Set().add(0)};
let crossDistances = cords.map(cord => closestCrossOfVisited(cord, visited));

function closestCrossOfVisited(cord, visited) {
    let result = Number.MAX_VALUE;

    let [x, y] = [0, 0];
    cord.forEach(([direction, distance]) => {
        for (let i = 0; i < distance; i++) {
            x += direction[0];
            y += direction[1];
            
            let row = visited[x] || (visited[x] = new Set());
            if (row.has(y)) {
                result = Math.min(result, Math.abs(x) + Math.abs(y));
            }
            row.add(y);
        }
    });

    return result;
}

console.log(crossDistances[1]);
