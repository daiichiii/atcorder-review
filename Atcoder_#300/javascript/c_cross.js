function main(input) {
    // 入力の処理
    const lines = input.trim().split('\n');
    const [h, w] = lines[0].split(' ').map(Number);
    const grid = lines.slice(1).map(line => line.split(''));

    const n = Math.min(h, w); // N は min(H, W)

    // 各サイズのバツ印の数を格納する配列
    const counts = Array(n).fill(0);

    // バツ印の中心を探索
    for (let i = 1; i < h - 1; i++) {
        for (let j = 1; j < w - 1; j++) {
            if (grid[i][j] !== '#') continue;

            let maxSize = 0;
            
            // バツ印のサイズごとにチェック
            for (let size = 1; size < n; size++) {
                if (i - size < 0 || i + size >= h || j - size < 0 || j + size >= w) break;

                if (grid[i + size][j + size] === '#' &&
                    grid[i + size][j - size] === '#' &&
                    grid[i - size][j + size] === '#' &&
                    grid[i - size][j - size] === '#') {
                    maxSize = size;
                } else {
                    break;
                }
            }

            // 最大サイズのバツ印をカウント
            if (maxSize > 0) {
                counts[maxSize - 1]++;
            }
        }
    }

    // 結果を出力
    console.log(counts.join(' '));
}

// 標準入力からデータを取得して main 関数を呼び出す
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
