n = gets.chomp.to_i

pk_result = []
n.times do |i|
  if i + 1 % 3 == 0
    pk_result << "o"
  else
    pk_result << "x"
  end
end

puts pk_result
