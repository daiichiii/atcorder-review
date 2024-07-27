# 入力を取得
S = gets.chomp

# 大文字と小文字のカウント
uppercase_count = S.count('A-Z')
lowercase_count = S.count('a-z')

# 大文字の個数が小文字の個数より多い場合、小文字を大文字に変換
if uppercase_count > lowercase_count
  puts S.upcase
else
  # そうでない場合、大文字を小文字に変換
  puts S.downcase
end
