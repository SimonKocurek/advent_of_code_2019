use std::io::stdin;

fn main() {
    let result: i32 = read_input()
        .into_iter()
        .map(total_mass)
        .sum();
    println!("{}", result);
}

fn read_input() -> Vec<i32> {
    let mut vec = vec![];

    let mut buffer = String::new();
    let stdin = stdin();
    while let Ok(_bytes) = stdin.read_line(&mut buffer) {
        let trimmed = buffer.trim();
        if trimmed.is_empty() {
            break
        }

        vec.push(trimmed.parse().unwrap());
        buffer.clear();
    }

    vec
}

fn total_mass(mass: i32) -> i32 {
    let mut result = 0;

    let mut unaccounted = mass;
    while unaccounted > 0 {
        unaccounted = needs_fuel(unaccounted);
        result += unaccounted;
    }

    result
}

fn needs_fuel(mass: i32) -> i32 {
    std::cmp::max(mass / 3 - 2, 0)
}
