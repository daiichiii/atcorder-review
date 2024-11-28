n, q = gets.chomp.split.map(&:to_i)
t = gets.chomp.split.map(&:to_i)

# 穴ごとの治療回数をカウントするハッシュを作成
treatment_counts = Hash.new(0)

# 各治療回数をカウント
t.each do |i|
  treatment_counts[i] += 1
end

# 奇数回の治療が行われた穴の数を数える
odd_treatment_count = treatment_counts.values.count { |count| count.odd? }

# 最終的に残っている歯の数を計算
remaining_teeth = n - odd_treatment_count

# 結果を出力
puts remaining_teeth
