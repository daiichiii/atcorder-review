s = gets.chomp.split("")

# 文字のカウントを格納するハッシュを初期化
count_hash = Hash.new(0)

# 文字ごとのカウントを行う
s.each do |char|
  count_hash[char] += 1
end

# 最大の出現回数を求める
max_count = count_hash.values.max

# 出現回数が最大の文字を選び、辞書順で最も上の文字を見つける
most_frequent_char = count_hash.select { |k, v| v == max_count }.keys.min

# 結果を出力
puts most_frequent_char
