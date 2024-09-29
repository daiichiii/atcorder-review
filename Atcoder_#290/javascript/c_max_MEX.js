function max_mex(n, k, a) {
    // 各要素の出現頻度を数える
    const count = new Map();
    for (let num of a) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    // MEXの最大値を探す
    let mex = 0;
    let chosen = 0;

    // 0から順に存在しない要素を探す
    while (chosen < k) {
        if (count.has(mex) && count.get(mex) > 0) {
            // このmexは配列aに含まれているので次に進む
            chosen++;
            mex++;
        } else {
            // MEXはこれ以上大きくできないので終了
            break;
        }
    }

    return mex;
}

// 入力を読み取る
const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const [n, k] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);

// 答えを出力する
console.log(max_mex(n, k, a));
