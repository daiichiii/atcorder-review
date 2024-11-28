# ユーグリッドの計算式
def euclidean_distance(x1, y1, x2, y2)
  ((x1 - x2) ** 2 + (y1 - y2) ** 2)
end

n = gets.chomp.to_i
points = []

n.times do
  points << gets.split.map(&:to_i)
end

n.times do |i|
  # 最初のループで必ず値が格納されるように初期値を設定
  max_distance = -1
  max_index = -1

  n.times do |j|
    next if i == j

    dist = euclidean_distance(points[i][0], points[i][1], points[j][0], points[j][1])

    if dist > max_distance
      max_distance = dist
      max_index = j + 1
    elsif dist == max_distance && j + 1 < max_index
      max_index = j + 1
    end
  end

  puts max_index
end
