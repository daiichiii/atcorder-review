function main(input) {
    const lines = input.trim().split('\n');
    
    const [n, x] = lines[0].split(' ').map(Number);
    
    // 2行目の配点リストを取得
    const s = lines[1].split(' ').map(Number);
    
    // 配点がX以下の問題の配点の合計を計算
    const total = s.filter(score => score <= x).reduce((sum, score) => sum + score, 0);
    
    // 結果を出力
    console.log(total);
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
