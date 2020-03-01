import fs from 'fs';

let [start, end] = fs
    .readFileSync('src/day4/input.txt')
    .toString()
    .split('-')
    .map(value => Number(value));

let result = 0;

for (let i = start; i <= end; i++) {
    if (isValid(String(i))) {
        result++;
    }
}

function isValid(value) {
    let foundDuplicate = false;

    for (let i = 1; i < value.length; i++) {
        if (value[i - 1] > value[i]) {
            return false;
        }
        if (value[i - 1] == value[i] && (!value[i + 1] || value[i] != value[i + 1]) && (!value[i - 2] || value[i - 1] != value[i - 2])) {
            foundDuplicate = true;
        }
    }

    return foundDuplicate;
}

console.log(result);