def main
  # 入力を取得
  h, w = gets.split.map(&:to_i)
  grid = Array.new(h) { gets.chomp.chars }

  # クッキーの置かれている矩形領域の左上と右下を探す
  top, bottom, left, right = nil, nil, nil, nil

  h.times do |i|
    w.times do |j|
      if grid[i][j] == '#'
        top = i if top.nil?
        bottom = i
        left = j if left.nil? || j < left
        right = j if right.nil? || j > right
      end
    end
  end

  # 矩形の領域内でクッキーがなくなっている位置を探す
  (top..bottom).each do |i|
    (left..right).each do |j|
      if grid[i][j] == '.'
        puts "#{i + 1} #{j + 1}"
        return
      end
    end
  end
end

main
