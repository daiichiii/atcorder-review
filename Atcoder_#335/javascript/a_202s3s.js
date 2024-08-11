function main(input) {
    let s = input.trim().split("");

    s[s.length - 1] = "4";

    console.log(s.join(""));
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
