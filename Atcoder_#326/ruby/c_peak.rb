n, m = gets.split.map(&:to_i)
a = gets.split.map(&:to_i)

# プレゼントの座標をソート
a.sort!

max_count = 0
j = 0

(0...n).each do |i|
  # j を進めて、a[j] が a[i] + M 以上になる直前まで調整
  j += 1 while j < n && a[j] < a[i] + m
  # 現在の範囲で取得できるプレゼントの数を計算
  max_count = [max_count, j - i].max
end

puts max_count
