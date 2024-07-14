n, x, y, z = gets.split.map(&:to_i)

# 全駅を配列に変換
stations = (1..n).to_a

# x と y の順序を正規化
x, y = [x, y].min, [x, y].max

# 降りる駅を抽出
getting_off_station = stations[x-1..y-1]

# zが含まれているかを確認
if getting_off_station.include?(z)
  puts "Yes"
else
  puts "No"
end
