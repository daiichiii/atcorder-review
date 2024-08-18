function possibleMatch(t_prime, s) {
    const lenDiff = t_prime.length - s.length;

    // Case 1: t_prime と s が完全に一致する場合
    if (lenDiff === 0 && t_prime === s) {
        return true;
    }

    // Case 4: t_prime と s の長さが同じ場合、1文字の違いを確認
    if (lenDiff === 0) {
        let diffCount = 0;
        for (let i = 0; i < t_prime.length; i++) {
            if (t_prime[i] !== s[i]) {
                diffCount += 1;
                if (diffCount > 1) {
                    return false;
                }
            }
        }
        return diffCount === 1;
    }

    // Case 2 & 3: 長さの差が1の場合
    if (Math.abs(lenDiff) === 1) {
        const longer = t_prime.length > s.length ? t_prime : s;
        const shorter = t_prime.length > s.length ? s : t_prime;
        let i = 0, j = 0;
        while (i < longer.length && j < shorter.length) {
            if (longer[i] !== shorter[j]) {
                return longer.slice(i + 1) === shorter.slice(j);
            }
            i += 1;
            j += 1;
        }
        return true;
    }

    return false;
}

function main(input) {
    const lines = input.trim().split('\n');
    const [n, t_prime] = lines[0].split(' ');
    const matches = [];

    for (let i = 1; i <= parseInt(n, 10); i++) {
        const s = lines[i];
        if (possibleMatch(t_prime, s)) {
            matches.push(i);
        }
    }

    console.log(matches.length);
    if (matches.length > 0) {
        console.log(matches.join(' '));
    }
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
