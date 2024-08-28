# 入力を受け取る
n, m = gets.split.map(&:to_i)
s = gets.chomp
c = gets.split.map(&:to_i)

# 各色に対応するインデックスのリストを作成
positions_by_color = Array.new(m + 1) { [] }

n.times do |i|
  positions_by_color[c[i]] << i
end

# 結果を格納する文字列の配列を初期化
result = s.chars

# 各色ごとに処理
(1..m).each do |color|
  positions = positions_by_color[color]
  next if positions.empty?

  # 右に1つシフトする
  last_char = result[positions[-1]]
  (positions.size - 1).downto(1) do |i|
    result[positions[i]] = result[positions[i - 1]]
  end
  result[positions[0]] = last_char
end

# 結果を出力
puts result.join
