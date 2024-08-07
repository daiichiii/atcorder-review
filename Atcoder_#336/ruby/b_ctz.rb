def ctz(n)
  # nを2進数の文字列に変換
  binary_str = n.to_s(2)
  # 末尾の連続する0の数を数える
  trailing_zeros = binary_str.match(/0*$/)[0].size
  trailing_zeros
end

# 標準入力から値を読み取る
input = gets.chomp.to_i

# 結果を出力
puts ctz(input)
