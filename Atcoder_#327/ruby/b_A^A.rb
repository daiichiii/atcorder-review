def find_a_for_b(b)
  return -1 if b == 0

  (1..b).each do |a|
    power = a**a
    return a if power == b
    break if power > b
  end
  -1
end

b = gets.to_i
result = find_a_for_b(b)

puts result
