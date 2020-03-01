import fs from 'fs';

let memory = fs.readFileSync('src/day2/input.txt')
    .toString()
    .replace(/\r?\n/, '')
    .split(',')
    .map(num => Number(num));

for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
        let values = {...memory};
        values[1] = noun;
        values[2] = verb;

        if (run(values) == 19690720) {
            console.log(100 * noun + verb);
            process.exit();
        }
    }
}

function run(program) {
    for (let i = 0; ; i += 4) {
        let op = program[i];
        if (op == 99) {
            break;
        }

        let [first, second] = [program[i + 1], program[i + 2]].map(index => program[index]);
        let target = program[i + 3];
        program[target] = op == 1 ? first + second : first * second;
    }

    return program[0];
}
