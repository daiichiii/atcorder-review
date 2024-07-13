n = gets.strip.to_i

h = gets.split.map(&:to_i)

# 1番目よりも高いビルを初期化
height_then_one = 0

# 1番目よりも高いビルが出た時点で、height_then_oneに格納しループを終了
n.times do |i|
  if h[0] < h[i]
    height_then_one = i
    break
  end
end

# 1番目よりも高いビルがなければ、-1を出力
if height_then_one == 0
  puts -1
else
  # 1番目よりも高いビルがあれば、その順番を出力
  puts height_then_one + 1
end
