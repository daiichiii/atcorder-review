n = gets.to_i
a = gets.split.map(&:to_i).map { |x| x - 1 }
w = gets.split.map(&:to_i)

boxes = Array.new(n) { [] }

# 各箱に荷物を追加
n.times do |i|
  boxes[a[i]] << w[i]
end

# 各箱の最大の荷物を残し、それ以外の荷物の重さを合計
min_cost = boxes.sum { |box| box.sum - box.max.to_i }

puts min_cost
