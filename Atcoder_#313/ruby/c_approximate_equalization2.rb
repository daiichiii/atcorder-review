n = gets.to_i
a = gets.split.map(&:to_i)

# 配列のソート
a.sort!

# 配列の合計値
sum_a = a.sum

# 平均値 x と余り y の計算
x = sum_a / n
y = sum_a % n

# ターゲット配列の生成
target = Array.new(n, x)
y.times { |i| target[-(i + 1)] += 1 }

# 操作回数の計算
operations = 0
n.times do |i|
  if target[i] > a[i]
    operations += target[i] - a[i]
  else
    break
  end
end

# 結果の出力
puts operations
