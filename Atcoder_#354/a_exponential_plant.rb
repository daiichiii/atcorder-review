H = gets.strip.to_i

height = 0
i = 0

while height <= H
  i += 1
  height = 2**i - 1
end

puts i
