const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const [w, b] = line.split(' ').map(Number);
  console.log(existsWbSubstring(w, b));
  rl.close();
});

function existsWbSubstring(w, b) {
  const s = 'wbwbwwbwbwbw';
  const sSize = s.length;
  const targetSize = w + b;

  // 必要に応じて、十分な長さに文字列を拡張
  const repeatTimes = Math.ceil(targetSize / sSize) + 1;
  const extendedS = s.repeat(repeatTimes);

  // 部分文字列をスライドしながらチェック
  for (let i = 0; i <= extendedS.length - targetSize; i++) {
    const substring = extendedS.slice(i, i + targetSize);
    const wCount = (substring.match(/w/g) || []).length;
    const bCount = (substring.match(/b/g) || []).length;
    if (wCount === w && bCount === b) {
      return "Yes";
    }
  }

  return "No";
}
