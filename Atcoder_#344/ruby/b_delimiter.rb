input_array = []
# 入力されるまでループ
loop do
  input = gets
  break if input.nil? || input.chomp.empty?
  input_array << input.chomp
end

# 入力されたものを逆順で出力
puts input_array.reverse
