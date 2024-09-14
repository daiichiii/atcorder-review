function main(input) {
    const lines = input.trim().split('\n');
    const [n, m] = lines[0].split(' ').map(Number);
    const strings = lines.slice(1, n + 1);

    // 2つの文字列が1文字だけ異なるかどうかを確認する関数
    function oneCharDiff(s1, s2) {
        let diffCount = 0;
        for (let i = 0; i < m; i++) {
            if (s1[i] !== s2[i]) {
                diffCount++;
            }
            if (diffCount > 1) {
                return false;
            }
        }
        return diffCount === 1;
    }

    // 順列生成用関数 (次の順列を生成)
    function* permute(arr) {
        if (arr.length <= 1) {
            yield arr;
        } else {
            for (let i = 0; i < arr.length; i++) {
                const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
                for (const perm of permute(rest)) {
                    yield [arr[i], ...perm];
                }
            }
        }
    }

    // 全ての順列を試す
    for (const perm of permute(strings)) {
        let valid = true;
        for (let i = 0; i < n - 1; i++) {
            if (!oneCharDiff(perm[i], perm[i + 1])) {
                valid = false;
                break;
            }
        }
        if (valid) {
            console.log('Yes');
            return;
        }
    }

    // どの並び替えも条件を満たさなかった場合
    console.log('No');
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
