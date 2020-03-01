import fs from 'fs';

let input = fs.readFileSync('src/day2/input.txt')
    .toString()
    .replace(/\r?\n/, '')
    .split(',')
    .map(num => Number(num));

let values = {...input};
values[1] = 12;
values[2] = 2;
for (let i = 0; ; i += 4) {
    let op = values[i];
    if (op == 99) {
        break;
    }

    let [first, second] = [values[i + 1], values[i + 2]].map(index => values[index]);
    let target = values[i + 3];
    values[target] = op == 1 ? first + second : first * second;
}

console.log(values[0]);