def calculate_distance(point1, point2)
  vertices = ['A', 'B', 'C', 'D', 'E']
  index1 = vertices.index(point1)
  index2 = vertices.index(point2)
  distance = (index1 - index2).abs
  [distance, 5 - distance].min
end

def main
  # 標準入力から2行を読み込み、それぞれをs1s2, t1t2に割り当て
  s1s2, t1t2 = gets.chomp, gets.chomp

  # 各ペアの点を取り出して距離を計算
  distance1 = calculate_distance(s1s2[0], s1s2[1])
  distance2 = calculate_distance(t1t2[0], t1t2[1])

  # 結果を判定して出力
  if distance1 == distance2
    puts "Yes"
  else
    puts "No"
  end
end

# 実行
main
