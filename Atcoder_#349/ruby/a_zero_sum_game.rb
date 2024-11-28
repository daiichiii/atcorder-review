n = gets.chomp.to_i
a = gets.split.map(&:to_i)

a_sum = a.sum

# a_sum が正の場合は負の絶対値、負の場合は正の絶対値を出力
puts a_sum > 0 ? -a_sum : a_sum.abs
