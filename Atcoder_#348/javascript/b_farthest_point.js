const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
  inputLines.push(line);
}).on('close', () => {
  processInput(inputLines);
});

function euclideanDistance(x1, y1, x2, y2) {
  return (x1 - x2) ** 2 + (y1 - y2) ** 2;
}

function processInput(input) {
  const n = parseInt(input[0]);
  const points = [];

  for (let i = 1; i <= n; i++) {
    points.push(input[i].split(' ').map(Number));
  }

  for (let i = 0; i < n; i++) {
    let maxDistance = -1;
    let maxIndex = -1;

    for (let j = 0; j < n; j++) {
      if (i === j) continue;

      const dist = euclideanDistance(points[i][0], points[i][1], points[j][0], points[j][1]);

      if (dist > maxDistance) {
        maxDistance = dist;
        maxIndex = j + 1;
      } else if (dist === maxDistance && j + 1 < maxIndex) {
        maxIndex = j + 1;
      }
    }

    console.log(maxIndex);
  }
}
