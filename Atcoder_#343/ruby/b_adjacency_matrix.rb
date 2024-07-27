# 標準入力からデータを読み込む
n = gets.to_i
adj_matrix = []

n.times do
  adj_matrix << gets.split.map(&:to_i)
end

# 各頂点に直接接続されている頂点を昇順に出力する
n.times do |i|
  connected_vertices = []
  n.times do |j|
    if adj_matrix[i][j] == 1
      connected_vertices << j + 1
    end
  end
  puts connected_vertices.join(" ")
end
