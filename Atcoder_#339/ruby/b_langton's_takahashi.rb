H, W, N = gets.split.map(&:to_i)

# グリッドの初期化
grid = Array.new(H) { Array.new(W, '.') }

# 高橋君の初期位置と向き（上=0, 右=1, 下=2, 左=3）
x, y, direction = 0, 0, 0

# 方向の変化を表す配列（上、右、下、左）
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

N.times do
  if grid[x][y] == '.'
    # 現在のマスが白の場合
    grid[x][y] = '#'
    direction = (direction + 1) % 4  # 時計回りに90度回転
  else
    # 現在のマスが黒の場合
    grid[x][y] = '.'
    direction = (direction + 3) % 4  # 反時計回りに90度回転
  end

  # 次のマスに移動
  x = (x + dx[direction]) % H
  y = (y + dy[direction]) % W
end

# グリッドの出力
grid.each do |row|
  puts row.join
end
