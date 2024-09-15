def main
  # 入力
  h, w = gets.split.map(&:to_i)
  grid = Array.new(h) { gets.chomp.chars }

  # N は min(H, W)
  n = [h, w].min

  # 各サイズのバツ印の数を格納する配列
  counts = Array.new(n, 0)

  # バツ印の中心を探索
  (1...h-1).each do |i|
    (1...w-1).each do |j|
      next unless grid[i][j] == '#'

      # バツ印のサイズごとにチェック
      max_size = 0

      (1...n).each do |size|
        # 中心からの距離 size の4つのマスを確認
        if i - size < 0 || i + size >= h || j - size < 0 || j + size >= w
          break
        end

        if grid[i + size][j + size] == '#' &&
           grid[i + size][j - size] == '#' &&
           grid[i - size][j + size] == '#' &&
           grid[i - size][j - size] == '#'
          max_size = size
        else
          break
        end
      end

      # 最大サイズのバツ印をカウント
      counts[max_size - 1] += 1 if max_size > 0
    end
  end

  # 結果の出力
  puts counts.join(' ')
end

main
