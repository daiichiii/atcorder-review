s = gets.chomp

# 文字の数を数える
char_count = Hash.new(0)
s.each_char { |char| char_count[char] += 1 }

# 他の文字と異なる文字を特定
unique_char = char_count.key(1)

# 異なる文字の位置を特定して出力
puts s.index(unique_char) + 1
