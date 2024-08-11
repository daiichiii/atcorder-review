function main(input) {
    // 入力を受け取る
    const [k, g, m] = input.trim().split(' ').map(Number);

    // グラスとマグカップの初期状態
    let glass = 0;
    let mug = 0;

    // 指定された回数 k だけ操作を繰り返す
    for (let i = 0; i < k; i++) {
        if (glass === g) {
            // グラスが満杯ならグラスの水を捨てる
            glass = 0;
        } else if (mug === 0) {
            // マグカップが空ならマグカップを満たす
            mug = m;
        } else {
            // マグカップからグラスに水を移す
            let transfer = Math.min(g - glass, mug);
            glass += transfer;
            mug -= transfer;
        }
    }

    // 最終的なグラスとマグカップの水の量を出力
    console.log(`${glass} ${mug}`);
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
