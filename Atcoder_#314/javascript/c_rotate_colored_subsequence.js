function main(input) {
    const lines = input.trim().split('\n');
    const [n, m] = lines[0].split(' ').map(Number);
    let s = lines[1].split('');
    const c = lines[2].split(' ').map(Number);

    // 各色に対応するインデックスのリストを作成
    const positionsByColor = Array.from({ length: m + 1 }, () => []);

    for (let i = 0; i < n; i++) {
        positionsByColor[c[i]].push(i);
    }

    // 各色ごとに処理
    for (let color = 1; color <= m; color++) {
        const positions = positionsByColor[color];
        if (positions.length === 0) continue;

        // 右に1つシフトする
        const lastChar = s[positions[positions.length - 1]];
        for (let i = positions.length - 1; i > 0; i--) {
            s[positions[i]] = s[positions[i - 1]];
        }
        s[positions[0]] = lastChar;
    }

    // 結果を出力
    console.log(s.join(''));
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
