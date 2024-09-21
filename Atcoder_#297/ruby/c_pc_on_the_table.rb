def main
  # 入力を受け取る
  h, w = gets.split.map(&:to_i)
  grid = Array.new(h) { gets.chomp.chars }

  # 各行ごとに処理を行う
  (0...h).each do |i|
    (0...w-1).each do |j|
      if grid[i][j] == 'T' && grid[i][j+1] == 'T'
        grid[i][j] = 'P'
        grid[i][j+1] = 'C'
      end
    end
  end

  # 結果を出力する
  grid.each do |row|
    puts row.join
  end
end

main
