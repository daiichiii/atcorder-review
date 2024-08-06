function main(input) {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0], 10);
    let totalTakahashi = 0;
    let totalAoki = 0;

    for (let i = 1; i <= N; i++) {
        const [X, Y] = lines[i].split(' ').map(Number);
        totalTakahashi += X;
        totalAoki += Y;
    }

    if (totalTakahashi > totalAoki) {
        console.log('Takahashi');
    } else if (totalTakahashi < totalAoki) {
        console.log('Aoki');
    } else {
        console.log('Draw');
    }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
