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

let visited = layDownCord(cords[0]);
let intersections = findIntersections(cords[1], visited);
let distances = intersections.map(intersection => stepsUntil(cords[0], intersection) + stepsUntil(cords[1], intersection));

let result = Math.min.apply(null, distances);

function layDownCord(cord) {
    let visited = {0: new Set().add(0)};

    let [x, y] = [0, 0];
    cord.forEach(([direction, distance]) => {
        for (let i = 0; i < distance; i++) {
            x += direction[0];
            y += direction[1];

            (visited[x] || (visited[x] = new Set())).add(y);
        }
    });

    return visited;
}

function findIntersections(cord, visited) {
    let intersections = [];

    let [x, y] = [0, 0];
    cord.forEach(([direction, distance]) => {
        for (let i = 0; i < distance; i++) {
            x += direction[0];
            y += direction[1];
            
            if ((visited[x] || (visited[x] = new Set())).has(y)) {
                intersections.push([x, y]);
            }
        }
    });

    return intersections;
}

function stepsUntil(cord, coordinates) {
    let result = 0;

    let [x, y] = [0, 0];
    for (let step of cord) {
        let [direction, distance] = step;
        for (let i = 0; i < distance; i++) {
            x += direction[0];
            y += direction[1];
            result += 1;

            if (x == coordinates[0] && y == coordinates[1]) {
                return result;
            }
        }
    }
}

console.log(result);
