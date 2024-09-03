function main(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0], 10);
    const people = [];

    for (let i = 1; i <= n; i++) {
        const [a, b] = lines[i].split(' ').map(Number);
        people.push([i, a, b]);
    }

    // 成功率の高い順、同じ成功率の場合は番号順でソート
    people.sort((person1, person2) => {
        const [_, a_i, b_i] = person1;
        const [__, a_j, b_j] = person2;

        const left = BigInt(a_i) * BigInt(b_j + a_j);
        const right = BigInt(a_j) * BigInt(b_i + a_i);

        if (left > right) return -1;
        if (left < right) return 1;
        return person1[0] - person2[0];
    });

    // 結果を出力
    console.log(people.map(person => person[0]).join(' '));
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
