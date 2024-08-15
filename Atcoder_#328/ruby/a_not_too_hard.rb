n, x = gets.split.map(&:to_i)
s = gets.split.map(&:to_i)

# 配点がX以下の問題の配点の合計を計算
total = s.select { |score| score <= x }.sum

# 結果を出力
puts total
