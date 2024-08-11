def count_trees(a, m, l, r)
  # 最初の木の座標をl以上の最小の座標に設定
  first_tree = ((l - a + m - 1) / m) * m + a

  # 最後の木の座標をr以下の最大の座標に設定
  last_tree = ((r - a) / m) * m + a

  # 木が1本以上立っている場合、その本数を計算
  if first_tree <= last_tree && first_tree <= r && last_tree >= l
    count = (last_tree - first_tree) / m + 1
  else
    count = 0
  end

  count
end

# 標準入力からデータを取得
a, m, l, r = gets.split.map(&:to_i)

# 結果を計算して出力
puts count_trees(a, m, l, r)
