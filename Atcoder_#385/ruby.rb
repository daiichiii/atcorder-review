h, w, x, y = gets.split.map(&:to_i)

# マス目の情報を受け取る
grid = []
h.times do
  grid << gets.strip.chars
end

# 移動指示を受け取る
movement_instructions = gets.strip

# 通行可能かどうかを判定する関数
def passable?(grid, x, y)
  grid[x - 1][y - 1] == '.' || grid[x - 1][y - 1] == '@'
end

# 家を訪問した座標を記録するためのセット
visited_houses = Set.new

# 移動処理
movement_instructions.each_char do |t|
  case t
  when 'U'
    # 上 (x-1, y) が通行可能なら移動
    if passable?(grid, x - 1, y)
      x -= 1
    end
  when 'D'
    # 下 (x+1, y) が通行可能なら移動
    if passable?(grid, x + 1, y)
      x += 1
    end
  when 'L'
    # 左 (x, y-1) が通行可能なら移動
    if passable?(grid, x, y - 1)
      y -= 1
    end
  when 'R'
    # 右 (x, y+1) が通行可能なら移動
    if passable?(grid, x, y + 1)
      y += 1
    end
  end

  # 家があるマス (@) に到達した場合、訪問済みとして記録
  visited_houses.add([x, y]) if grid[x - 1][y - 1] == '@'
end

puts "#{x} #{y} #{visited_houses.size}"
