H, W = gets.split.map(&:to_i)
grid = Array.new(H) { gets.split.map(&:to_i) }

# 深さ優先探索（DFS）の関数
def dfs(i, j, visited, grid, h, w)
  # 終点 (H, W) に到達した場合、経路がすべて異なるなら 1 を返す
  if i == h - 1 && j == w - 1
    return 1
  end

  # 可能な経路の数をカウント
  count = 0

  # 右に移動する
  if j + 1 < w && !visited.include?(grid[i][j + 1])
    visited.add(grid[i][j + 1])
    count += dfs(i, j + 1, visited, grid, h, w)
    visited.delete(grid[i][j + 1])
  end

  # 下に移動する
  if i + 1 < h && !visited.include?(grid[i + 1][j])
    visited.add(grid[i + 1][j])
    count += dfs(i + 1, j, visited, grid, h, w)
    visited.delete(grid[i + 1][j])
  end

  return count
end

# 最初のマス (1, 1) からスタート
visited = Set.new([grid[0][0]])
result = dfs(0, 0, visited, grid, H, W)

# 結果を出力
puts result
