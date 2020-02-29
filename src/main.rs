use std::io::stdin;

fn main() {
    let result: i32 = read_input()
        .into_iter()
        .map(|x| x / 3 - 2)
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
