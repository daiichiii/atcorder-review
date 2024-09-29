def max_mex(n, k, a)
  # 各要素の出現頻度を数える
  count = Hash.new(0)
  a.each { |num| count[num] += 1 }

  # MEXの最大値を探す
  mex = 0
  chosen = 0

  # 0から順に存在しない要素を探す
  while chosen < k
    if count[mex] > 0
      # このmexは配列aに含まれているので次に進む
      chosen += 1
      mex += 1
    else
      # MEXはこれ以上大きくできないので終了
      break
    end
  end

  mex
end

# 入力を読み取る
n, k = gets.split.map(&:to_i)
a = gets.split.map(&:to_i)

# 答えを出力する
puts max_mex(n, k, a)
