function main(input) {
    const lines = input.trim().split('\n');
    const [H, W] = lines[0].split(' ').map(Number);
    const grid = lines.slice(1).map(line => line.split(' ').map(Number));

    // 深さ優先探索 (DFS) 関数
    function dfs(i, j, visited) {
        // 終点 (H, W) に到達した場合、経路がすべて異なるなら 1 を返す
        if (i === H - 1 && j === W - 1) {
            return 1;
        }

        let count = 0;

        // 右に移動する
        if (j + 1 < W && !visited.has(grid[i][j + 1])) {
            visited.add(grid[i][j + 1]);
            count += dfs(i, j + 1, visited);
            visited.delete(grid[i][j + 1]);
        }

        // 下に移動する
        if (i + 1 < H && !visited.has(grid[i + 1][j])) {
            visited.add(grid[i + 1][j]);
            count += dfs(i + 1, j, visited);
            visited.delete(grid[i + 1][j]);
        }

        return count;
    }

    // 最初のマス (1, 1) からスタート
    const visited = new Set([grid[0][0]]);
    const result = dfs(0, 0, visited);

    // 結果を出力
    console.log(result);
}

// 標準入力を読み込み、main関数を呼び出す
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
