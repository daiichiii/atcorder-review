# 入力を受け取る
n, l, r = gets.split.map(&:to_i)
a = gets.split.map(&:to_i)

# 結果を格納する配列
result = []

# 各要素に対して X[i] を計算
a.each do |ai|
  if ai < l
    result << l
  elsif ai > r
    result << r
  else
    result << ai
  end
end

# 結果を出力
puts result.join(' ')
