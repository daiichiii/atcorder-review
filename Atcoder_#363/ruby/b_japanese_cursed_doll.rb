n, t, p = gets.split(" ").map(&:to_i)
l = gets.split(" ").map(&:to_i)

# 現在の髪の長さがT以上の人の数を数える
initial_count = l.count { |length| length >= t }

# すでに条件を満たしている場合は0を出力
if initial_count >= p
  puts 0
else
  # 条件を満たすために必要な日数を計算
  days = 0
  loop do
    days += 1
    new_count = l.count { |length| length + days >= t }
    if new_count >= p
      puts days
      break
    end
  end
end
