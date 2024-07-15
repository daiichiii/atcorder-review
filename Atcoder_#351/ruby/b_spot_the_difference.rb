# 標準入力を取得
n = gets.to_i

a = []
b = []

# aの配列を初期化し、入力を格納
n.times do
  a << gets.chomp.chars
end

# bの配列を初期化し、入力を格納
n.times do
  b << gets.chomp.chars
end

# 異なる部分のインデックスを出力
n.times do |i|
  n.times do |j|
    if a[i][j] != b[i][j]
      puts "#{i + 1} #{j + 1}"
      break
    end
  end
end
