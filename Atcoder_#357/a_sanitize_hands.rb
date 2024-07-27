# 標準入力から整数を取得
n, m = gets.split.map(&:to_i)

# 宇宙人の手の数を取得
h = gets.split.map(&:to_i)

# 残りの消毒液の数を初期化
count = 0

# 各宇宙人が何人目まで消毒できるかを確認
h.each do |hands|
  if m < hands  # 消毒液が足りない場合
    break
  else
    count += 1
    m -= hands  # 消毒液の残量を減らす
  end
end

# 結果を出力
puts count
