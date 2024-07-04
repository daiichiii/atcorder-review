n, m = gets.chomp.split.map(&:to_i)
s = Array.new(n) { gets.chomp }

min_stalls = n + 1

# 全ての組み合わせを試すためのビット全探索
(1...1 << n).each do |bit|
  covered = Array.new(m, false)
  
  # 選択した売り場でカバーされている味をマーク
  n.times do |i|
    if bit[i] == 1
      m.times do |j|
        covered[j] = true if s[i][j] == 'o'
      end
    end
  end
  
  # 全ての味がカバーされているかを確認
  if covered.all?
    min_stalls = [min_stalls, bit.to_s(2).count('1')].min
  end
end

# 最小の売り場の数を出力
puts min_stalls
