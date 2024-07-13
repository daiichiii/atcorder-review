n, k = gets.strip.split.map(&:to_i)

a = gets.split.map(&:to_i)

# 1回目の乗車は確定しているため、+1
count = 1
# 乗車人数を初期化
ride_number = a[0]

# (n-1)回ループ
(n-1).times do |i|
  # 次の乗車する人を加えた時に乗車人数制限を超えた場合カウント+1
  if ride_number + a[i+1] > k
    count += 1
    # 次の要素でride_numberをリセット
    ride_number = a[i+1]
  else
    # 次の乗車人数を加算
    ride_number += a[i+1]
  end
end

# グループ数を出力
puts count
