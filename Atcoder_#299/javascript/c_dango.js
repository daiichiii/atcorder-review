function main(input) {
    // 入力を行ごとに分割
    const lines = input.trim().split('\n');
    const a = parseInt(lines[0]); // 文字列の長さを取得
    const b = lines[1].split(""); // 文字列を配列として扱う

    // ダミーの "-" を追加して処理を一貫させる
    b.push("-");

    // 連続した "o" の最大値を記録するための変数
    let maxO = 0;
    let currentO = 0;

    // 配列を順に処理
    for (let i = 0; i < b.length; i++) {
        if (b[i] === "o") {
            currentO++; // 連続する "o" をカウント
        } else {
            // "-" が来たら、現在の連続 "o" の最大値を更新
            maxO = Math.max(maxO, currentO);
            currentO = 0; // カウントをリセット
        }
    }

    // ダミーの "-" を削除
    b.pop();

    // 全てが "o" だけなら -1 を出力
    if (b.filter(c => c === 'o').length === a) {
        console.log("-1");
    } else if (maxO === 0) {
        // 最大の "o" の連続が見つからなければ -1 を出力
        console.log("-1");
    } else {
        // 最大の "o" の連続数を出力
        console.log(maxO);
    }
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
