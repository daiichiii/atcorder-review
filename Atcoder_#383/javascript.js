/*-------------------------
 * 入力、出力処理
 *-------------------------*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
rl.on("line", (line) => {
  inputLines.push(line);
});

rl.on("close", () => {
  const [H, W, maxDistance] = inputLines[0].split(" ").map(Number);

  // マス目情報を取得
  const grid = [];
  for (let i = 1; i <= H; i++) {
    grid.push(inputLines[i].split(""));
  }

  main(H, W, maxDistance, grid);
});

/*-------------------------
 * メイン処理
 *-------------------------*/
function main(H, W, maxDistance, grid) {

  // 最大限計算する座標を少なくするために床の座標を取得
  const dotPositions = getDotPositions(grid);

  // 最大加湿範囲を計算
  const maxHumidifiedCount = calculateMaxHumidification(
    dotPositions,
    grid,
    maxDistance
  );

  // 結果を出力
  console.log(maxHumidifiedCount);
}

/**
 * 床の座標を取得する関数
 *
 * @param {Array<Array<string>>} grid - マス目情報
 * @returns {Array<Array<number>>} - 床マスの座標リスト
 */
function getDotPositions(grid) {
  return grid.reduce((floorCoordinates, row, i) => {
    row.forEach((cell, j) => {
      if (cell === ".") floorCoordinates.push([i, j]);
    });
    return floorCoordinates;
  }, []);
}

/**
 * 最大加湿範囲を計算する関数
 *
 * @param {Array<Array<number>>} dotPositions - 床マスの座標リスト
 * @param {Array<Array<string>>} grid - グリッド
 * @param {number} maxDistance - マンハッタン距離の上限
 * @returns {number} - 最大加湿範囲のサイズ
 */
function calculateMaxHumidification(dotPositions, grid, maxDistance) {
  // 最大加湿範囲
  let maxHumidifiedCount = 0;

  // 床マスの座標の組み合わせを全探索
  dotPositions.forEach((pos1, i) => {
    dotPositions.slice(i + 1).forEach((pos2) => {
      const [x1, y1] = pos1;
      const [x2, y2] = pos2;

      // ダミーグリッドを作成
      const tempGrid = grid.map((row) => [...row]);

      // 加湿処理を行い、加湿できる範囲を加湿済み("#")に変更
      // 1回目の加湿処理
      const firstArea = getHumidifiedArea(tempGrid, x1, y1, maxDistance);
      firstArea.forEach(([x, y]) => (tempGrid[x][y] = "#"));

      // 2回目の加湿処理
      const secondArea = getHumidifiedArea(tempGrid, x2, y2, maxDistance);
      secondArea.forEach(([x, y]) => (tempGrid[x][y] = "#"));

      // 加湿された合計範囲をカウント
      const totalHumidifiedCount = firstArea.length + secondArea.length;

      // 最大値を更新
      maxHumidifiedCount = Math.max(maxHumidifiedCount, totalHumidifiedCount);
    });
  });

/**
 * マンハッタン距離がD以下の範囲を取得する関数
 *
 * @param {Array<Array<string>>} grid - 現在のダミーグリッド
 * @param {number} x,y - 中心のx座標 中心のy座標
 * @param {number} maxDistance - マンハッタン距離の上限
 * @returns {Array<Array<number>>} - 加湿可能な範囲の座標リスト
 */
function getHumidifiedArea(grid, x, y, maxDistance) {
  const positions = [];
  grid.forEach((row, i) => {
    row.forEach((cell, j) => {
      // マンハッタン距離がmaxDistance以下でかつ床マスのマスを取得
      if (
        Math.abs(x - i) + Math.abs(y - j) <= maxDistance &&
        grid[i][j] === "."
      ) {
        positions.push([i, j]);
      }
    });
  });
  return positions;
}

  return maxHumidifiedCount;
}
