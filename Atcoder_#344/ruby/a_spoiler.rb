# 標準入力から文字列を取得
s = gets.to_s

# ||で囲まれた部分以外を抽出
required_values = s.split(/\|.*?\|/).join("")

puts required_values
