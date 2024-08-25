# 入力を受け取る
n, m = gets.split.map(&:to_i)
edges = Array.new(n) { Array.new(n, nil) }

# 辺の情報を格納する
m.times do
  a, b, c = gets.split.map(&:to_i)
  edges[a-1][b-1] = c
  edges[b-1][a-1] = c
end

# DPテーブルの初期化
dp = Array.new(1 << n) { Array.new(n, -1) }
max_distance = 0

# 初期化: 各街を出発点に設定
n.times do |i|
  dp[1 << i][i] = 0
end

# 全ての部分集合についてDPを計算
(1 << n).times do |mask|
  n.times do |u|
    if dp[mask][u] != -1
      n.times do |v|
        if edges[u][v] && (mask & (1 << v)) == 0
          new_mask = mask | (1 << v)
          dp[new_mask][v] = [dp[new_mask][v], dp[mask][u] + edges[u][v]].max
          max_distance = [max_distance, dp[new_mask][v]].max
        end
      end
    end
  end
end

# 結果を出力
puts max_distance
