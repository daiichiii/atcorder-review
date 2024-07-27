# 入力の読み込み
n, m = gets.strip.split.map(&:to_i)
a = gets.strip.split.map(&:to_i)
b = gets.strip.split.map(&:to_i)

# AとBを結合し、昇順にソート
c = (a + b).sort

# 連続するAの要素があるかをチェック
found_consecutive = false

c.each_cons(2) do |x, y|
  if a.include?(x) && a.include?(y)
    found_consecutive = true
    break
  end
end

# 結果を出力
puts found_consecutive ? "Yes" : "No"
