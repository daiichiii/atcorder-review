function main(input) {
    const lines = input.trim().split('\n');
    const [H, W] = lines[0].split(' ').map(Number);
    const grid = lines.slice(1).map(line => line.split(''));

    const DIRECTIONS = [
        [-1,  0], [1,  0], [0, -1], [0,  1],  // 上下左右
        [-1, -1], [-1, 1], [1, -1], [1,  1]   // 斜め
    ];

    function dfs(grid, x, y) {
        const stack = [[x, y]];
        grid[x][y] = '.';  // 訪れた場所を'.'に置き換え

        while (stack.length > 0) {
            const [cx, cy] = stack.pop();

            DIRECTIONS.forEach(([dx, dy]) => {
                const nx = cx + dx;
                const ny = cy + dy;

                if (nx >= 0 && nx < H && ny >= 0 && ny < W && grid[nx][ny] === '#') {
                    grid[nx][ny] = '.';
                    stack.push([nx, ny]);
                }
            });
        }
    }

    let sensorCount = 0;

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (grid[i][j] === '#') {
                dfs(grid, i, j);
                sensorCount++;
            }
        }
    }
        console.log(sensorCount);

}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
