const readline = require('readline');

function readInput(callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let inputLines = [];

  rl.on('line', (line) => {
    inputLines.push(line);
  }).on('close', () => {
    callback(inputLines);
  });
}

function processInput(input) {
  const [n, x, y, z] = input[0].split(' ').map(Number);

  // 全駅を配列に変換
  let stations = [];
  for (let i = 1; i <= n; i++) {
    stations.push(i);
}


  // x と y の順序を正規化
  const [start, end] = [Math.min(x, y), Math.max(x, y)];

  // 降りる駅を抽出
  const getting_off_station = stations.slice(start - 1, end);

  if (getting_off_station.includes(z)) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

// 入力を読み取り、コールバック関数で処理する
readInput(processInput);
