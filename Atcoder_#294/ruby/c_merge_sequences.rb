def merge_sequences(n, m, a, b)
  # AとBをマージして昇順にソートし、重複を取り除いた配列
  c = (a + b).uniq.sort

  # 座標圧縮用のハッシュ
  index_map = {}
  c.each_with_index do |value, index|
    index_map[value] = index + 1
  end

  # AとBの要素をそれぞれ座標圧縮して出力
  a_indices = a.map { |ai| index_map[ai] }
  b_indices = b.map { |bi| index_map[bi] }

  puts a_indices.join(" ")
  puts b_indices.join(" ")
end

# 標準入力から値を取得
n, m = gets.split.map(&:to_i)
a = gets.split.map(&:to_i)
b = gets.split.map(&:to_i)

# 関数を呼び出し、結果を出力
merge_sequences(n, m, a, b)
