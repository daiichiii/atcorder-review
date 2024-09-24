function mergeSequences(n, m, a, b) {
    // AとBをマージして昇順にソートし、重複を取り除く
    const merged = Array.from(new Set([...a, ...b])).sort((x, y) => x - y);
    
    // 座標圧縮用のマップを作成
    const indexMap = new Map();
    merged.forEach((value, index) => {
        indexMap.set(value, index + 1);  // 1-based index
    });

    // AとBそれぞれの要素を座標圧縮して出力
    const aIndices = a.map(ai => indexMap.get(ai));
    const bIndices = b.map(bi => indexMap.get(bi));

    console.log(aIndices.join(" "));
    console.log(bIndices.join(" "));
}

// 標準入力を取得し、メイン関数を呼び出す
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

// 入力データをパース
const [n, m] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

// 関数呼び出し
mergeSequences(n, m, a, b);
