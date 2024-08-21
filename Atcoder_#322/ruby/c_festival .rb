n, m = gets.split.map(&:to_i)
a = gets.split.map(&:to_i).sort

n.times do |i|
  # i+1以上の最小値を見つけるためにバイナリサーチを使用
  index = a.bsearch_index { |num| num >= i + 1 }

  if index
    diff = a[index] - (i + 1)
  else
    diff = n - (i + 1)
  end

  puts diff
end
