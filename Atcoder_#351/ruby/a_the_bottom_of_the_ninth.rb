a = gets.chomp.split.map(&:to_i)
b = gets.chomp.split.map(&:to_i)

# 差分を計算
score_difference = a.sum - b.sum

# bが勝つための最小の点数を出力
puts score_difference + 1
