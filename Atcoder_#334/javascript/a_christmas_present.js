function main(input) {
    const [b, g] = input.trim().split(' ').map(Number);

    if (b > g) {
        console.log('Bat');
    } else {
        console.log('Glove');
    }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
