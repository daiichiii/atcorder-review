function main(input) {
    const lines = input.trim().split('\n');  // 入力を行ごとに分割
    const n = parseInt(lines[0], 10);  // Nを取得
    const socks = lines[1].split(' ').map(Number);  // 靴下の色の配列を取得

    const sockCount = {};  // 色ごとの靴下の数を数えるオブジェクト

    // 靴下の色ごとにカウント
    for (const sock of socks) {
        sockCount[sock] = (sockCount[sock] || 0) + 1;
    }

    let pairs = 0;

    // 各色ごとの靴下の数を2で割ってペアを計算
    for (const count of Object.values(sockCount)) {
        pairs += Math.floor(count / 2);
    }

    console.log(pairs);  // 結果を出力
}

// 標準入力を読み込み、main関数を呼び出す処理
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
