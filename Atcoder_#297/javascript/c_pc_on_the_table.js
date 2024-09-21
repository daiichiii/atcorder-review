function main(input) {
    // 入力を改行で分割し、最初の行からHとWを取得
    const lines = input.trim().split('\n');
    const [h, w] = lines[0].split(' ').map(Number);
    const grid = lines.slice(1).map(line => line.split(''));

    // 各行ごとに隣り合う "T" を "P" と "C" に置き換える
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w - 1; j++) {
            if (grid[i][j] === 'T' && grid[i][j + 1] === 'T') {
                grid[i][j] = 'P';
                grid[i][j + 1] = 'C';
            }
        }
    }

    // 結果を出力
    const result = grid.map(row => row.join('')).join('\n');
    console.log(result);
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
