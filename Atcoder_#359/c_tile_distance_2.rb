# 入力を読み込む
sx, sy = gets.split.map(&:to_i)
gx, gy = gets.split.map(&:to_i)

# sx, sy の調整（i+jが奇数の場合、sxを調整）
sx -= 1 if (sx + sy) % 2 == 1
# sx が gx より大きい場合の調整
sx += 1 if sx > gx

# y方向の移動距離
dir_y = (sy - gy).abs
# x方向の移動距離
dir_x = (sx - gx).abs

# 通行料の計算
if dir_y <= dir_x
  fee = dir_y + (dir_x - dir_y) / 2
else
  fee = dir_y
end

# 結果を出力
puts fee
