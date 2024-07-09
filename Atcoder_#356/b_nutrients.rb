n,m = gets.strip.split.map(&:to_i)

a = gets.strip.split.map(&:to_i)

x = Array.new(n) { gets.strip.split.map(&:to_i) }

# 各栄養素の合計摂取量を計算
total_nutrients = Array.new(m,0)
# 列ごとに加算
x.each do |row|
  row.each.with_index do |value, j|
    total_nutrients[j] += value
  end
end

# 目標を達成しているか確認
achieved = true
m.times do |i|
  if total_nutrients[i] < a[i]
    achieved = false
    break
  end
end

puts achieved ? "Yes" : "No"
