n = gets.to_i
count = 0

# A * B の組み合わせを先に計算
ab_combinations = {}

(1..n).each do |a|
  (1..n).each do |b|
    ab = a * b
    break if ab > n
    ab_combinations[ab] ||= 0
    ab_combinations[ab] += 1
  end
end

# 残りの C * D のペアを探す
(1..n).each do |c|
  (1..n).each do |d|
    cd = c * d
    break if cd > n
    count += ab_combinations[n - cd] if ab_combinations[n - cd]
  end
end

puts count
