s = gets.chomp

# sの末尾3文字を取得
number_str = s[3..5]

# 結合した文字列を整数に変換
number = number_str.to_i

# 範囲チェック
if (1..349).include?(number) && number != 316
  puts "Yes"
else
  puts "No"
end
