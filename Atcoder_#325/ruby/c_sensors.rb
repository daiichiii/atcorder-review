H, W = gets.split.map(&:to_i)
grid = Array.new(H) { gets.chomp.chars }

# 移動方向を定義 (上下左右と斜め)
DIRECTIONS = [
  [-1,  0], [1,  0], [0, -1], [0,  1],  # 上下左右
  [-1, -1], [-1, 1], [1, -1], [1,  1]   # 斜め
]

def dfs(grid, x, y)
  stack = [[x, y]]
  grid[x][y] = '.'  # 訪れた場所を'.'に置き換え

  until stack.empty?
    cx, cy = stack.pop

    DIRECTIONS.each do |dx, dy|
      nx, ny = cx + dx, cy + dy
      if nx >= 0 && nx < grid.size && ny >= 0 && ny < grid[0].size && grid[nx][ny] == '#'
        grid[nx][ny] = '.'
        stack.push([nx, ny])
      end
    end
  end
end

sensor_count = 0

(0...H).each do |i|
  (0...W).each do |j|
    if grid[i][j] == '#'
      dfs(grid, i, j)
      sensor_count += 1
    end
  end
end

puts sensor_count
