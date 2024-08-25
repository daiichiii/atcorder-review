# 入力を受け取る
n, d, p = gets.split.map(&:to_i)
f = gets.split.map(&:to_i)

# 運賃を降順でソート
f.sort!.reverse!

# 最小コストを計算する
total_cost = 0
i = 0

while i < n
  # 期間内の運賃の合計を計算
  if i + d <= n
    period_cost = f[i, d].sum

    # 周遊パスを使用した方が安い場合
    if period_cost > p
      total_cost += p
    else
      total_cost += period_cost
    end
    i += d
  else
    # 残りの日がd枚に満たない場合
    remaining_days = n - i
    remaining_cost = f[i, remaining_days].sum

    # 残りの日数に対してもパスを使用するか判断
    if remaining_cost > p
      total_cost += p
    else
      total_cost += remaining_cost
    end
    break
  end
end

puts total_cost
