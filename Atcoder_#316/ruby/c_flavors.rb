n = gets.to_i
mhash = {}
hash = {}

n.times do
  f, s = gets.split.map(&:to_i)
  hash[f] ||= []
  hash[f] << s
  mhash[f] ||= 0
  mhash[f] = [mhash[f], s].max
end

# 異なる味の最大2つのスコアの合計を計算
max = 0
if mhash.length >= 2
  max = mhash.values.sort[-2..-1].sum
end

# 同じ味のカップに対する満足度の計算
hash.each do |f, arr|
  next if arr.length <= 1
  a, b = arr.sort[-2..-1]
  sum = b + a / 2
  max = [max, sum].max
end

puts max
