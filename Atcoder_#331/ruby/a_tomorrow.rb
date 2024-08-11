# 入力を受け取る
M, D = gets.split.map(&:to_i)
y, m, d = gets.split.map(&:to_i)

# 日付を進める
if d < D
  # 月内の日付がまだ残っている場合
  d += 1
else
  # 月末の場合
  d = 1
  if m < M
    # 年内の月がまだ残っている場合
    m += 1
  else
    # 年末の場合
    m = 1
    y += 1
  end
end

# 結果を出力
puts "#{y} #{m} #{d}"
