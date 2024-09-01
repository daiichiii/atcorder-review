function main(input) {
    const lines = input.trim().split('\n');
    const [n, k] = lines[0].split(' ').map(Number);
    const pills = [];

    // 各薬の日数と錠数を取得
    for (let i = 1; i <= n; i++) {
        const [a, b] = lines[i].split(' ').map(Number);
        pills.push([a, b]);
    }

    // a の昇順にソートする
    pills.sort((x, y) => x[0] - y[0]);

    // 全錠数の合計
    let totalPills = pills.reduce((sum, pill) => sum + pill[1], 0);

    if (totalPills <= k) {
        console.log(1);
        return;
    }

    // 処方日の順に累積錠数を計算していく
    for (let i = 0; i < n; i++) {
        const [a, b] = pills[i];
        totalPills -= b;  // その日の錠数を減算

        if (totalPills <= k) {
            console.log(a + 1);
            return;
        }
    }
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
