# 入力を受け取る
N, S, M, L = gets.split.map(&:to_i)

# 最小金額を格納するための変数を非常に大きな値で初期化
min_cost = Float::INFINITY

# それぞれのパックの個数で試す
(0..(N / 6 + 1)).each do |x|
  (0..(N / 8 + 1)).each do |y|
    (0..(N / 12 + 1)).each do |z|
      # 現在のパック数でカバーできる卵の総数
      eggs = 6 * x + 8 * y + 12 * z

      # 卵の個数が N 以上であればコストを計算
      if eggs >= N
        cost = S * x + M * y + L * z
        # 最小コストを更新
        min_cost = [min_cost, cost].min
      end
    end
  end
end

# 最小金額を出力
puts min_cost
