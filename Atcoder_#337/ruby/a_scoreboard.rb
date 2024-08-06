n = gets.to_i
scores_takahashi = []
scores_aoki = []

n.times do
  x, y = gets.split.map(&:to_i)
  scores_takahashi << x
  scores_aoki << y
end

# 合計点を計算
total_takahashi = scores_takahashi.sum
total_aoki = scores_aoki.sum

# 結果を出力
if total_takahashi > total_aoki
  puts 'Takahashi'
elsif total_takahashi < total_aoki
  puts 'Aoki'
else
  puts 'Draw'
end
