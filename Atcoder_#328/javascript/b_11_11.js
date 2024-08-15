function main(input) {
    // 入力を配列に分割
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]);
    const daysInMonth = lines[1].split(' ').map(Number);

    // ゾロ目の日付のカウント
    let count = 0;

    for (let month = 1; month <= n; month++) {
        for (let day = 1; day <= daysInMonth[month - 1]; day++) {
            const monthStr = month.toString();
            const dayStr = day.toString();

            // 月と日が同じ1桁の数字で構成されているかを確認
            if (monthStr.length === 1 && dayStr.length === 1 && monthStr === dayStr) {
                count++;
            } else if (monthStr.length > 1 && dayStr.length === 1 && new Set(monthStr).size === 1 && monthStr[0] === dayStr) {
                count++;
            } else if (monthStr.length === 1 && dayStr.length > 1 && new Set(dayStr).size === 1 && dayStr[0] === monthStr) {
                count++;
            } else if (monthStr.length > 1 && dayStr.length > 1 && new Set(monthStr).size === 1 && new Set(dayStr).size === 1 && monthStr[0] === dayStr[0]) {
                count++;
            }
        }
    }

    // 結果を出力
    console.log(count);
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
