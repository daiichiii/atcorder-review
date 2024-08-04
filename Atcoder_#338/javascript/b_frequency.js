function main(input) {
    const s = input.trim().split("");

    // 文字のカウントを格納するオブジェクトを初期化
    const countObj = {};

    // 文字ごとのカウントを行う
    s.forEach(char => {
        if (countObj[char]) {
            countObj[char]++;
        } else {
            countObj[char] = 1;
        }
    });

    // 最大の出現回数を求める
    const maxCount = Math.max(...Object.values(countObj));

    // 出現回数が最大の文字を選び、辞書順で最も上の文字を見つける
    const mostFrequentChars = Object.keys(countObj).filter(key => countObj[key] === maxCount);
    const mostFrequentChar = mostFrequentChars.sort()[0];

    // 結果を出力
    console.log(mostFrequentChar);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
