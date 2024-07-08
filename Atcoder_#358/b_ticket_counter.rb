n, a = gets.chomp.split.map(&:to_i) 

t = gets.chomp.split.map(&:to_i) 

count_time = 0 

# 各人がチケットを購入し終わる時間を計算
n.times do |i|
  # 並んでいる人がいないとき
  if count_time <= t[i]
    count_time = t[i] + a
  else
    count_time += a
  end
  puts count_time
end
