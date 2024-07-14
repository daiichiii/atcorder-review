s = gets.chomp.split('')
t = gets.chomp.split('')

# 正しい文字列の格納先を初期化
true_chars = []
# 再走査する際に利用する
last_char = 0

# sを左から抽出
s.each do |s_char|
  # tを左からsと比較
  # tは次の文字の走査の際には、前回のindexからスタート
  (last_char...t.size).each do |index|
    if s_char == t[index]
      true_chars << index + 1
      last_char = index + 1
      break
    end
  end
end

puts true_chars.join(" ")
