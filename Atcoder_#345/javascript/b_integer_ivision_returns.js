const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    // 入力をBigIntに変換
    const X = BigInt(input);

    // X を 10 で割る
    const quotient = X / 10n;
    const remainder = X % 10n;

    // 結果を天井関数で丸める
    let result;
    if (remainder === 0n) {
        result = quotient;
    } else if (X > 0) {
        result = quotient + 1n;
    } else {
        result = quotient;
    }

    // 結果を出力
    console.log(result.toString());

    rl.close();
});
