n = gets.to_i
a = gets.split.map(&:to_i)

# 配列の中で最大の数を取得
max_value = a.max

# 最大でない数を取り出し、その中で最大のものを取得
second_max = a.select { |x| x != max_value }.max

# 結果を出力
puts second_max
