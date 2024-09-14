function canWin(s, t) {
    // @ に変換可能な文字を定義
    const atcoderChars = new Set(['a', 't', 'c', 'o', 'd', 'e', 'r']);

    // 各文字のカウントを行う
    const sCount = {};
    const tCount = {};

    // カウント初期化関数
    function countChars(str, countObj) {
        for (let ch of str) {
            if (ch !== '@') {
                countObj[ch] = (countObj[ch] || 0) + 1;
            }
        }
    }

    countChars(s, sCount);
    countChars(t, tCount);

    // S と T の @ の数を取得
    let sAt = (s.match(/@/g) || []).length;
    let tAt = (t.match(/@/g) || []).length;

    // S側とT側の文字を比較し、足りない分を@で補えるか確認
    for (let ch of atcoderChars) {
        const sCountCh = sCount[ch] || 0;
        const tCountCh = tCount[ch] || 0;

        if (sCountCh > tCountCh) {
            tAt -= sCountCh - tCountCh;
        } else if (tCountCh > sCountCh) {
            sAt -= tCountCh - sCountCh;
        }

        // @が足りなくなったら不可能
        if (sAt < 0 || tAt < 0) {
            return false;
        }
    }

    // @ を使わない部分の文字もチェック
    for (let ch in sCount) {
        if (!atcoderChars.has(ch) && sCount[ch] !== (tCount[ch] || 0)) {
            return false;
        }
    }

    for (let ch in tCount) {
        if (!atcoderChars.has(ch) && tCount[ch] !== (sCount[ch] || 0)) {
            return false;
        }
    }

    return true;
}

// 標準入力の取得と結果の出力
function main(input) {
    const lines = input.trim().split('\n');
    const s = lines[0];
    const t = lines[1];

    if (canWin(s, t)) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
