# 標準入力からデータを取得
n = gets.to_i
p = gets.split.map(&:to_i)
q = gets.to_i

# クエリを取得
queries = []
q.times do
  queries << gets.split.map(&:to_i)
end

# 各クエリに対して処理を実行
queries.each do |a, b|
  # それぞれの人が前から何番目かを調べる
  a_index = p.index(a)
  b_index = p.index(b)

  # より前に並んでいる人を出力
  if a_index < b_index
    puts a
  else
    puts b
  end
end
