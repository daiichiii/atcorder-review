function main(input) {
    const lines = input.trim().split('\n');

    // Nの取得
    const n = parseInt(lines[0]);

    // 数列Aの取得
    const a = lines[1].split(' ').map(Number);

    // 各数字の出現位置を記録するオブジェクト
    const positionMap = {};

    // 各要素の出現位置を記録
    a.forEach((num, idx) => {
        if (!positionMap[num]) {
            positionMap[num] = [];
        }
        positionMap[num].push(idx + 1);  // 1-based index
    });

    // f(i)のリストを作成し、2番目の出現位置でソート
    const result = Array.from({ length: n }, (_, i) => i + 1)
        .sort((i, j) => positionMap[i][1] - positionMap[j][1]);

    // 結果を出力
    console.log(result.join(' '));
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
