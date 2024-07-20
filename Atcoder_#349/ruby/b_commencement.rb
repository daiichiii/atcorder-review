def good_string?(s)
  # 文字の出現回数を数える
  char_count = Hash.new(0)
  s.each_char { |char| char_count[char] += 1 }

  # 出現回数ごとにその出現回数を持つ文字の種類数をカウントする
  count_freq = Hash.new(0)
  char_count.each_value { |count| count_freq[count] += 1 }

  # 出現回数ごとに条件をチェック
  count_freq.each_value do |freq|
    return false unless freq == 0 || freq == 2
  end

  true
end

# 標準入力から文字列を読み込む
s = gets.chomp

# 判定結果を出力する
puts good_string?(s) ? "Yes" : "No"
